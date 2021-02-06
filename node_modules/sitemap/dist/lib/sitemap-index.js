"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const xmlbuilder_1 = require("xmlbuilder");
const sitemap_1 = require("./sitemap");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
/**
 * Shortcut for `new SitemapIndex (...)`.
 * Create several sitemaps and an index automatically from a list of urls
 *
 * @param   {Object}        conf
 * @param   {String|Array}  conf.urls
 * @param   {String}        conf.targetFolder
 * @param   {String}        conf.hostname
 * @param   {Number}        conf.cacheTime
 * @param   {String}        conf.sitemapName
 * @param   {Number}        conf.sitemapSize
 * @param   {String}        conf.xslUrl
 * @return  {SitemapIndex}
 */
function createSitemapIndex(conf) {
    // cleaner diff
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return new SitemapIndex(conf.urls, conf.targetFolder, conf.hostname, conf.cacheTime, conf.sitemapName, conf.sitemapSize, conf.xslUrl, conf.gzip, conf.callback);
}
exports.createSitemapIndex = createSitemapIndex;
/**
 * Builds a sitemap index from urls
 *
 * @param   {Object}    conf
 * @param   {Array}     conf.urls
 * @param   {String}    conf.xslUrl
 * @param   {String}    conf.xmlNs
 * @param   {String}    conf.lastmod When the referenced sitemap was last modified
 * @return  {String}    XML String of SitemapIndex
 */
function buildSitemapIndex(conf) {
    const root = xmlbuilder_1.create('sitemapindex', { encoding: 'UTF-8' });
    let lastmod = '';
    if (conf.xslUrl) {
        root.instructionBefore('xml-stylesheet', `type="text/xsl" href="${conf.xslUrl}"`);
    }
    if (!conf.xmlNs) {
        conf.xmlNs = 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
    }
    const ns = conf.xmlNs.split(' ');
    for (let attr of ns) {
        const [k, v] = attr.split('=');
        root.attribute(k, v.replace(/^['"]|['"]$/g, ''));
    }
    if (conf.lastmod) {
        lastmod = new Date(conf.lastmod).toISOString();
    }
    conf.urls.forEach((url) => {
        let lm = lastmod;
        if (url instanceof Object && url.url) {
            if (url.lastmod) {
                lm = new Date(url.lastmod).toISOString();
            }
            url = url.url;
        }
        const sm = root.element('sitemap');
        sm.element('loc', url);
        if (lm) {
            sm.element('lastmod', lm);
        }
    });
    return root.end();
}
exports.buildSitemapIndex = buildSitemapIndex;
/**
 * Sitemap index (for several sitemaps)
 */
class SitemapIndex {
    /**
     * @param {String|Array}  urls
     * @param {String}        targetFolder
     * @param {String}        hostname      optional
     * @param {Number}        cacheTime     optional in milliseconds
     * @param {String}        sitemapName   optional
     * @param {Number}        sitemapSize   optional This limit is defined by Google. See: https://sitemaps.org/protocol.php#index
     * @param {Number}        xslUrl                optional
     * @param {Boolean}       gzip          optional
     * @param {Function}      callback      optional
     */
    constructor(urls = [], targetFolder = '.', hostname, cacheTime, sitemapName, sitemapSize, xslUrl, gzip = false, callback) {
        this.urls = urls;
        this.targetFolder = targetFolder;
        this.hostname = hostname;
        this.sitemapSize = sitemapSize;
        this.xslUrl = xslUrl;
        this.callback = callback;
        if (sitemapName === undefined) {
            this.sitemapName = 'sitemap';
        }
        else {
            this.sitemapName = sitemapName;
        }
        this.sitemapId = 0;
        this.sitemaps = [];
        try {
            if (!fs_1.statSync(targetFolder).isDirectory()) {
                throw new errors_1.UndefinedTargetFolder();
            }
        }
        catch (e) {
            throw new errors_1.UndefinedTargetFolder();
        }
        this.chunks = utils_1.chunk(urls, this.sitemapSize);
        let processesCount = this.chunks.length + 1;
        this.chunks.forEach((chunk, index) => {
            const extension = '.xml' + (gzip ? '.gz' : '');
            const filename = this.sitemapName + '-' + this.sitemapId++ + extension;
            this.sitemaps.push(filename);
            let sitemap = sitemap_1.createSitemap({
                hostname,
                cacheTime,
                urls: chunk,
                xslUrl
            });
            let stream = fs_1.createWriteStream(targetFolder + '/' + filename);
            stream.once('open', (fd) => {
                stream.write(gzip ? sitemap.toGzip() : sitemap.toString());
                stream.end();
                processesCount--;
                if (processesCount === 0 && typeof this.callback === 'function') {
                    this.callback(undefined, true);
                }
            });
        });
        const stream = fs_1.createWriteStream(targetFolder + '/' +
            this.sitemapName + '-index.xml');
        stream.once('open', (fd) => {
            stream.write(buildSitemapIndex({
                urls: this.sitemaps.map((sitemap) => hostname + '/' + sitemap),
                xslUrl
            }));
            stream.end();
            processesCount--;
            if (processesCount === 0 && typeof this.callback === 'function') {
                this.callback(undefined, true);
            }
        });
    }
}
//# sourceMappingURL=sitemap-index.js.map