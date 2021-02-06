/// <reference types="node" />
/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
import { XMLElement } from 'xmlbuilder';
import { ISitemapItemOptionsLoose, SitemapItemOptions, ErrorLevel } from './types';
import { CompressCallback } from 'zlib';
export interface ISitemapOptions {
    urls?: (ISitemapItemOptionsLoose | string)[];
    hostname?: string;
    cacheTime?: number;
    xslUrl?: string;
    xmlNs?: string;
    level?: ErrorLevel;
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
export declare function createSitemap({ urls, hostname, cacheTime, xslUrl, xmlNs, level }: ISitemapOptions): Sitemap;
export declare class Sitemap {
    limit: number;
    xmlNs: string;
    cacheSetTimestamp: number;
    private urls;
    cacheTime: number;
    cache: string;
    root: XMLElement;
    hostname?: string;
    xslUrl?: string;
    /**
     * Sitemap constructor
     * @param {String|Array}  urls
     * @param {String}        hostname    optional
     * @param {Number} [cacheTime=0]       cacheTime   optional in milliseconds; 0 - cache disabled
     * @param {String=}        xslUrl            optional
     * @param {String=}        xmlNs            optional
     * @param {ErrorLevel} [level=ErrorLevel.WARN]    level            optional
     */
    constructor({ urls, hostname, cacheTime, xslUrl, xmlNs, level }?: ISitemapOptions);
    /**
     *  Empty cache and bipass it until set again
     */
    clearCache(): void;
    /**
     * has it been less than cacheTime since cache was set
     *  @returns true if it has been less than cacheTime ms since cache was set
     */
    isCacheValid(): boolean;
    /**
     *  stores the passed in string on the instance to be used when toString is
     *  called within the configured cacheTime
     *  @param {string} newCache what you want cached
     *  @returns the passed in string unaltered
     */
    setCache(newCache: string): string;
    private _normalizeURL;
    /**
     *  Add url to sitemap
     *  @param {String | ISitemapItemOptionsLoose} url
     *  @param {ErrorLevel} [level=ErrorLevel.WARN] level
     */
    add(url: string | ISitemapItemOptionsLoose, level?: ErrorLevel): number;
    /**
     * For checking whether the url has been added or not
     * @param {string | ISitemapItemOptionsLoose} url The url you wish to check
     * @returns true if the sitemap has the passed in url
     */
    contains(url: string | ISitemapItemOptionsLoose): boolean;
    /**
     *  Delete url from sitemap
     *  @param {String | SitemapItemOptions} url
     *  @returns boolean whether the item was removed
     */
    del(url: string | ISitemapItemOptionsLoose): boolean;
    /**
     *  Alias for toString
     * @param {boolean} [pretty=false] whether xml should include whitespace
     */
    toXML(pretty?: boolean): string;
    /**
     * Converts the passed in sitemap entry into one capable of being consumed by SitemapItem
     * @param {string | ISitemapItemOptionsLoose} elem the string or object to be converted
     * @param {XMLElement=} root xmlbuilder root object. Pass undefined here
     * @param {string} hostname
     * @returns SitemapItemOptions a strict sitemap item option
     */
    static normalizeURL(elem: string | ISitemapItemOptionsLoose, root?: XMLElement, hostname?: string): SitemapItemOptions;
    /**
     * Normalize multiple urls
     * @param {(string | ISitemapItemOptionsLoose)[]} urls array of urls to be normalized
     * @param {XMLElement=} root xmlbuilder root object. Pass undefined here
     * @param {string=} hostname
     * @returns a Map of url to SitemapItemOption
     */
    static normalizeURLs(urls: (string | ISitemapItemOptionsLoose)[], root?: XMLElement, hostname?: string): Map<string, SitemapItemOptions>;
    /**
     *  Converts the urls stored in an instance of Sitemap to a valid sitemap xml document
     *  as a string. Accepts a boolean as its first argument to designate on whether to
     *  pretty print. Defaults to false.
     *  @return {String}
     */
    toString(pretty?: boolean): string;
    /**
     * like toString, it builds the xmlDocument, then it runs gzip on the
     * resulting string and returns it as a Buffer via callback or direct
     * invokation
     * @param {CompressCallback=} callback executes callback on completion with a buffer parameter
     * @returns a Buffer if no callback is provided
     */
    toGzip(callback: CompressCallback): void;
    toGzip(): Buffer;
}
