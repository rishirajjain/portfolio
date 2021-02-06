import { ICallback, ISitemapIndexItemOptions, SitemapItemOptions } from './types';
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
export declare function createSitemapIndex(conf: {
    urls: SitemapIndex["urls"];
    targetFolder: SitemapIndex["targetFolder"];
    hostname?: SitemapIndex["hostname"];
    cacheTime?: SitemapIndex["cacheTime"];
    sitemapName?: SitemapIndex["sitemapName"];
    sitemapSize?: SitemapIndex["sitemapSize"];
    xslUrl?: SitemapIndex["xslUrl"];
    gzip?: boolean;
    callback?: SitemapIndex["callback"];
}): SitemapIndex;
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
export declare function buildSitemapIndex(conf: {
    urls: (ISitemapIndexItemOptions | string)[];
    xslUrl?: string;
    xmlNs?: string;
    lastmod?: number | string;
}): string;
/**
 * Sitemap index (for several sitemaps)
 */
declare class SitemapIndex {
    urls: (string | SitemapItemOptions)[];
    targetFolder: string;
    hostname?: string | undefined;
    sitemapSize?: number | undefined;
    xslUrl?: string | undefined;
    callback?: ICallback<Error, boolean> | undefined;
    sitemapName: string;
    sitemapId: number;
    sitemaps: string[];
    chunks: (string | SitemapItemOptions)[][];
    cacheTime?: number;
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
    constructor(urls?: (string | SitemapItemOptions)[], targetFolder?: string, hostname?: string | undefined, cacheTime?: number, sitemapName?: string, sitemapSize?: number | undefined, xslUrl?: string | undefined, gzip?: boolean, callback?: ICallback<Error, boolean> | undefined);
}
export {};
