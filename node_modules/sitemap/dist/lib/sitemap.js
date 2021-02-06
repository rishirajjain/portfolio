"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable camelcase, semi */
/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
const xmlbuilder_1 = require("xmlbuilder");
const sitemap_item_1 = require("./sitemap-item");
const types_1 = require("./types");
const zlib_1 = require("zlib");
const url_1 = require("url");
const fs_1 = require("fs");
const utils_1 = require("./utils");
function boolToYESNO(bool) {
    if (bool === undefined) {
        return bool;
    }
    if (typeof bool === 'boolean') {
        return bool ? types_1.EnumYesNo.yes : types_1.EnumYesNo.no;
    }
    return bool;
}
/**
 * Shortcut for `new Sitemap (...)`.
 *
 * @param   {Object}        conf
 * @param   {String}        conf.hostname
 * @param   {String|Array}  conf.urls
 * @param   {Number}        conf.cacheTime
 * @param   {String}        conf.xslUrl
 * @param   {String}        conf.xmlNs
 * @param   {ErrorLevel} [level=ErrorLevel.WARN]    level            optional
 * @return  {Sitemap}
 */
function createSitemap({ urls, hostname, cacheTime, xslUrl, xmlNs, level }) {
    // cleaner diff
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new Sitemap({
        urls,
        hostname,
        cacheTime,
        xslUrl,
        xmlNs,
        level
    });
}
exports.createSitemap = createSitemap;
class Sitemap {
    /**
     * Sitemap constructor
     * @param {String|Array}  urls
     * @param {String}        hostname    optional
     * @param {Number} [cacheTime=0]       cacheTime   optional in milliseconds; 0 - cache disabled
     * @param {String=}        xslUrl            optional
     * @param {String=}        xmlNs            optional
     * @param {ErrorLevel} [level=ErrorLevel.WARN]    level            optional
     */
    constructor({ urls = [], hostname, cacheTime = 0, xslUrl, xmlNs, level = types_1.ErrorLevel.WARN } = {}) {
        // This limit is defined by Google. See:
        // https://sitemaps.org/protocol.php#index
        this.limit = 5000;
        this.xmlNs = '';
        this.cacheSetTimestamp = 0;
        // Base domain
        this.hostname = hostname;
        // sitemap cache
        this.cacheTime = cacheTime;
        this.cache = '';
        this.xslUrl = xslUrl;
        this.root = xmlbuilder_1.create('urlset', { encoding: 'UTF-8' });
        if (xmlNs) {
            this.xmlNs = xmlNs;
            const ns = this.xmlNs.split(' ');
            for (let attr of ns) {
                const [k, v] = attr.split('=');
                this.root.attribute(k, v.replace(/^['"]|['"]$/g, ''));
            }
        }
        urls = Array.from(urls);
        this.urls = Sitemap.normalizeURLs(urls, this.root, this.hostname);
        for (let [, url] of this.urls) {
            utils_1.validateSMIOptions(url, level);
        }
    }
    /**
     *  Empty cache and bipass it until set again
     */
    clearCache() {
        this.cache = '';
    }
    /**
     * has it been less than cacheTime since cache was set
     *  @returns true if it has been less than cacheTime ms since cache was set
     */
    isCacheValid() {
        let currTimestamp = Date.now();
        return !!(this.cacheTime && this.cache &&
            (this.cacheSetTimestamp + this.cacheTime) >= currTimestamp);
    }
    /**
     *  stores the passed in string on the instance to be used when toString is
     *  called within the configured cacheTime
     *  @param {string} newCache what you want cached
     *  @returns the passed in string unaltered
     */
    setCache(newCache) {
        this.cache = newCache;
        this.cacheSetTimestamp = Date.now();
        return this.cache;
    }
    _normalizeURL(url) {
        return Sitemap.normalizeURL(url, this.root, this.hostname);
    }
    /**
     *  Add url to sitemap
     *  @param {String | ISitemapItemOptionsLoose} url
     *  @param {ErrorLevel} [level=ErrorLevel.WARN] level
     */
    add(url, level) {
        const smi = this._normalizeURL(url);
        utils_1.validateSMIOptions(smi, level);
        return this.urls.set(smi.url, smi).size;
    }
    /**
     * For checking whether the url has been added or not
     * @param {string | ISitemapItemOptionsLoose} url The url you wish to check
     * @returns true if the sitemap has the passed in url
     */
    contains(url) {
        return this.urls.has(this._normalizeURL(url).url);
    }
    /**
     *  Delete url from sitemap
     *  @param {String | SitemapItemOptions} url
     *  @returns boolean whether the item was removed
     */
    del(url) {
        return this.urls.delete(this._normalizeURL(url).url);
    }
    /**
     *  Alias for toString
     * @param {boolean} [pretty=false] whether xml should include whitespace
     */
    toXML(pretty) {
        return this.toString(pretty);
    }
    /**
     * Converts the passed in sitemap entry into one capable of being consumed by SitemapItem
     * @param {string | ISitemapItemOptionsLoose} elem the string or object to be converted
     * @param {XMLElement=} root xmlbuilder root object. Pass undefined here
     * @param {string} hostname
     * @returns SitemapItemOptions a strict sitemap item option
     */
    static normalizeURL(elem, root, hostname) {
        // SitemapItem
        // create object with url property
        let smi = {
            img: [],
            video: [],
            links: [],
            url: ''
        };
        let smiLoose;
        if (typeof elem === 'string') {
            smi.url = elem;
            smiLoose = { url: elem };
        }
        else {
            smiLoose = elem;
        }
        smi.url = (new url_1.URL(smiLoose.url, hostname)).toString();
        let img = [];
        if (smiLoose.img) {
            if (typeof smiLoose.img === 'string') {
                // string -> array of objects
                smiLoose.img = [{ url: smiLoose.img }];
            }
            else if (!Array.isArray(smiLoose.img)) {
                // object -> array of objects
                smiLoose.img = [smiLoose.img];
            }
            img = smiLoose.img.map((el) => typeof el === 'string' ? { url: el } : el);
        }
        // prepend hostname to all image urls
        smi.img = img.map((el) => (Object.assign({}, el, { url: (new url_1.URL(el.url, hostname)).toString() })));
        let links = [];
        if (smiLoose.links) {
            links = smiLoose.links;
        }
        smi.links = links.map((link) => {
            return Object.assign({}, link, { url: (new url_1.URL(link.url, hostname)).toString() });
        });
        if (smiLoose.video) {
            if (!Array.isArray(smiLoose.video)) {
                // make it an array
                smiLoose.video = [smiLoose.video];
            }
            smi.video = smiLoose.video.map((video) => {
                const nv = Object.assign({}, video, { 
                    /* eslint-disable-next-line @typescript-eslint/camelcase */
                    family_friendly: boolToYESNO(video.family_friendly), live: boolToYESNO(video.live), 
                    /* eslint-disable-next-line @typescript-eslint/camelcase */
                    requires_subscription: boolToYESNO(video.requires_subscription), tag: [], rating: undefined });
                if (video.tag !== undefined) {
                    nv.tag = !Array.isArray(video.tag) ? [video.tag] : video.tag;
                }
                if (video.rating !== undefined) {
                    if (typeof video.rating === 'string') {
                        nv.rating = parseFloat(video.rating);
                    }
                    else {
                        nv.rating = video.rating;
                    }
                }
                if (video.view_count !== undefined) {
                    /* eslint-disable-next-line @typescript-eslint/camelcase */
                    nv.view_count = '' + video.view_count;
                }
                return nv;
            });
        }
        // If given a file to use for last modified date
        if (smiLoose.lastmodfile) {
            const { mtime } = fs_1.statSync(smiLoose.lastmodfile);
            smi.lastmod = (new Date(mtime)).toISOString();
            // The date of last modification (YYYY-MM-DD)
        }
        else if (smiLoose.lastmodISO) {
            smi.lastmod = (new Date(smiLoose.lastmodISO)).toISOString();
        }
        else if (smiLoose.lastmod) {
            smi.lastmod = (new Date(smiLoose.lastmod)).toISOString();
        }
        smi = Object.assign({}, smiLoose, smi);
        return smi;
    }
    /**
     * Normalize multiple urls
     * @param {(string | ISitemapItemOptionsLoose)[]} urls array of urls to be normalized
     * @param {XMLElement=} root xmlbuilder root object. Pass undefined here
     * @param {string=} hostname
     * @returns a Map of url to SitemapItemOption
     */
    static normalizeURLs(urls, root, hostname) {
        const urlMap = new Map();
        urls.forEach((elem) => {
            const smio = Sitemap.normalizeURL(elem, root, hostname);
            urlMap.set(smio.url, smio);
        });
        return urlMap;
    }
    /**
     *  Converts the urls stored in an instance of Sitemap to a valid sitemap xml document
     *  as a string. Accepts a boolean as its first argument to designate on whether to
     *  pretty print. Defaults to false.
     *  @return {String}
     */
    toString(pretty = false) {
        if (this.root.children.length) {
            this.root.children = [];
        }
        if (!this.xmlNs) {
            this.root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
            this.root.att('xmlns:news', 'http://www.google.com/schemas/sitemap-news/0.9');
            this.root.att('xmlns:xhtml', 'http://www.w3.org/1999/xhtml');
            this.root.att('xmlns:mobile', 'http://www.google.com/schemas/sitemap-mobile/1.0');
            this.root.att('xmlns:image', 'http://www.google.com/schemas/sitemap-image/1.1');
            this.root.att('xmlns:video', 'http://www.google.com/schemas/sitemap-video/1.1');
        }
        if (this.xslUrl) {
            this.root.instructionBefore('xml-stylesheet', `type="text/xsl" href="${this.xslUrl}"`);
        }
        if (this.isCacheValid()) {
            return this.cache;
        }
        // TODO: if size > limit: create sitemapindex
        for (let [, smi] of this.urls) {
            (new sitemap_item_1.SitemapItem(smi, this.root)).buildXML();
        }
        let opts;
        if (pretty) {
            opts = { pretty };
        }
        return this.setCache(this.root.end(opts));
    }
    toGzip(callback) {
        if (typeof callback === 'function') {
            zlib_1.gzip(this.toString(), callback);
        }
        else {
            return zlib_1.gzipSync(this.toString());
        }
    }
}
exports.Sitemap = Sitemap;
//# sourceMappingURL=sitemap.js.map