import { XMLElement } from 'xmlbuilder';
import { IVideoItem, SitemapItemOptions, ErrorLevel } from './types';
/**
 * Item in sitemap
 */
export declare class SitemapItem {
    conf: SitemapItemOptions;
    root: XMLElement;
    loc: SitemapItemOptions["url"];
    lastmod: SitemapItemOptions["lastmod"];
    changefreq: SitemapItemOptions["changefreq"];
    priority: SitemapItemOptions["priority"];
    news?: SitemapItemOptions["news"];
    img?: SitemapItemOptions["img"];
    links?: SitemapItemOptions["links"];
    expires?: SitemapItemOptions["expires"];
    androidLink?: SitemapItemOptions["androidLink"];
    mobile?: SitemapItemOptions["mobile"];
    video?: SitemapItemOptions["video"];
    ampLink?: SitemapItemOptions["ampLink"];
    url: XMLElement;
    constructor(conf: SitemapItemOptions, root?: XMLElement, level?: ErrorLevel);
    /**
     * For creating standalone sitemap entries
     * @param {SitemapItemOptions} conf sitemap entry options
     * @param {ErrorLevel} [level=ErrorLevel.WARN] How to handle errors in data passed in
     * @return {string} the entry
     */
    static justItem(conf: SitemapItemOptions, level?: ErrorLevel): string;
    /**
     *  Create sitemap xml
     *  @return {String}
     */
    toXML(): string;
    /**
     * Builds just video element
     * @param {IVideoItem} video sitemap video configuration
     */
    buildVideoElement(video: IVideoItem): void;
    /**
     * given the passed in sitemap item options builds an internal xml structure
     * @returns the XMLElement built
     */
    buildXML(): XMLElement;
    /**
     *  Builds and stringifies the xml as configured by constructor
     *  @return {String} the item converted to a string of xml
     */
    toString(): string;
}
