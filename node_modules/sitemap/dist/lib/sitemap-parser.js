"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sax_1 = __importDefault(require("sax"));
const tagTemplate = {
    img: [],
    video: [],
    links: [],
    url: ''
};
const videoTemplate = {
    tag: [],
    // eslint-disable-next-line @typescript-eslint/camelcase
    thumbnail_loc: "",
    title: "",
    description: ""
};
const imageTemplate = {
    url: ''
};
const linkTemplate = {
    lang: '',
    url: ''
};
/**
  Read xml and resolve with the configuration that would produce it or reject with
  an error
  ```
  const { createReadStream } = require('fs')
  const { parseSitemap, createSitemap } = require('sitemap')
  parseSitemap(createReadStream('./example.xml')).then(
    // produces the same xml
    // you can, of course, more practically modify it or store it
    (xmlConfig) => console.log(createSitemap(xmlConfig).toString()),
    (err) => console.log(err)
  )
  ```
  @param {Readable} xml what to parse
  @return {Promise<ISitemapOptions>} resolves with a valid config that can be
  passed to createSitemap. Rejects with an Error object.
 */
function parseSitemap(xml) {
    return __awaiter(this, void 0, void 0, function* () {
        // @ts-ignore
        const saxStream = sax_1.default.createStream(true, { xmlns: true, strictEntities: true, trim: true });
        const smi = [];
        let currentItem = Object.assign({}, tagTemplate);
        let currentTag;
        let currentVideo = Object.assign({}, videoTemplate);
        let currentImage = Object.assign({}, imageTemplate);
        let currentLink = Object.assign({}, linkTemplate);
        let dontpushCurrentLink = false;
        saxStream.on('opentagstart', (tag) => {
            currentTag = tag.name;
            if (currentTag.startsWith('news:') && !currentItem.news) {
                currentItem.news = {
                    publication: { name: "", language: "" },
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    publication_date: "",
                    title: ""
                };
            }
        });
        saxStream.on('opentag', (tag) => {
            switch (tag.name) {
                case "url":
                case "loc":
                case "urlset":
                case "lastmod":
                case "changefreq":
                case "priority":
                case "video:thumbnail_loc":
                case "video:video":
                case "video:title":
                case "video:description":
                case "video:tag":
                case "video:duration":
                case "video:player_loc":
                case "image:image":
                case "image:loc":
                case "image:geo_location":
                case "image:license":
                case "image:title":
                case "image:caption":
                case "video:requires_subscription":
                case "video:publication_date":
                case "video:id":
                case "video:restriction":
                case "video:family_friendly":
                case "video:view_count":
                case "video:uploader":
                case "video:expiration_date":
                case "video:platform":
                case "video:price":
                case "video:rating":
                case "video:category":
                case "video:live":
                case "video:gallery_loc":
                case "news:news":
                case "news:publication":
                case "news:name":
                case "news:access":
                case "news:genres":
                case "news:publication_date":
                case "news:title":
                case "news:keywords":
                case "news:stock_tickers":
                case "news:language":
                    break;
                case "mobile:mobile":
                    currentItem.mobile = true;
                    break;
                case 'xhtml:link':
                    // @ts-ignore
                    if (tag.attributes.rel.value === 'alternate' && tag.attributes.hreflang) {
                        // @ts-ignore
                        currentLink.url = tag.attributes.href.value;
                        // @ts-ignore
                        currentLink.lang = tag.attributes.hreflang.value;
                        // @ts-ignore
                    }
                    else if (tag.attributes.rel.value === 'alternate') {
                        dontpushCurrentLink = true;
                        // @ts-ignore
                        currentItem.androidLink = tag.attributes.href.value;
                        // @ts-ignore
                    }
                    else if (tag.attributes.rel.value === 'amphtml') {
                        dontpushCurrentLink = true;
                        // @ts-ignore
                        currentItem.ampLink = tag.attributes.href.value;
                    }
                    else {
                        console.log('unhandled attr for xhtml:link', tag.attributes);
                    }
                    break;
                default:
                    console.warn('unhandled tag', tag.name);
                    break;
            }
        });
        saxStream.on('text', (text) => {
            switch (currentTag) {
                case "mobile:mobile":
                    break;
                case 'loc':
                    currentItem.url = text;
                    break;
                case 'changefreq':
                    currentItem.changefreq = text;
                    break;
                case 'priority':
                    currentItem.priority = parseFloat(text);
                    break;
                case 'lastmod':
                    currentItem.lastmod = text;
                    break;
                case "video:thumbnail_loc":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.thumbnail_loc = text;
                    break;
                case "video:tag":
                    currentVideo.tag.push(text);
                    break;
                case "video:duration":
                    currentVideo.duration = parseInt(text, 10);
                    break;
                case "video:player_loc":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.player_loc = text;
                    break;
                case "video:requires_subscription":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.requires_subscription = text;
                    break;
                case "video:publication_date":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.publication_date = text;
                    break;
                case "video:id":
                    currentVideo.id = text;
                    break;
                case "video:restriction":
                    currentVideo.restriction = text;
                    break;
                case "video:view_count":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.view_count = text;
                    break;
                case "video:uploader":
                    currentVideo.uploader = text;
                    break;
                case "video:family_friendly":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.family_friendly = text;
                    break;
                case "video:expiration_date":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.expiration_date = text;
                    break;
                case "video:platform":
                    currentVideo.platform = text;
                    break;
                case "video:price":
                    currentVideo.price = text;
                    break;
                case "video:rating":
                    currentVideo.rating = parseFloat(text);
                    break;
                case "video:category":
                    currentVideo.category = text;
                    break;
                case "video:live":
                    currentVideo.live = text;
                    break;
                case "video:gallery_loc":
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentVideo.gallery_loc = text;
                    break;
                case "image:loc":
                    currentImage.url = text;
                    break;
                case "image:geo_location":
                    currentImage.geoLocation = text;
                    break;
                case "image:license":
                    currentImage.license = text;
                    break;
                case "news:access":
                    // @ts-ignore
                    currentItem.news.access = text;
                    break;
                case "news:genres":
                    // @ts-ignore
                    currentItem.news.genres = text;
                    break;
                case "news:publication_date":
                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentItem.news.publication_date = text;
                    break;
                case "news:keywords":
                    // @ts-ignore
                    currentItem.news.keywords = text;
                    break;
                case "news:stock_tickers":
                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    currentItem.news.stock_tickers = text;
                    break;
                case "news:language":
                    // @ts-ignore
                    currentItem.news.publication.language = text;
                    break;
                default:
                    console.log('unhandled text for tag:', currentTag, `'${text}'`);
                    break;
            }
        });
        saxStream.on('cdata', (text) => {
            switch (currentTag) {
                case "video:title":
                    currentVideo.title += text;
                    break;
                case "video:description":
                    currentVideo.description += text;
                    break;
                case "news:name":
                    // @ts-ignore
                    currentItem.news.publication.name += text;
                    break;
                case "news:title":
                    // @ts-ignore
                    currentItem.news.title += text;
                    break;
                case "image:caption":
                    if (!currentImage.caption) {
                        currentImage.caption = text;
                    }
                    else {
                        currentImage.caption += text;
                    }
                    break;
                case "image:title":
                    if (!currentImage.title) {
                        currentImage.title = text;
                    }
                    else {
                        currentImage.title += text;
                    }
                    break;
                default:
                    console.log('unhandled cdata for tag:', currentTag);
                    break;
            }
        });
        saxStream.on('attribute', (attr) => {
            switch (currentTag) {
                case "urlset":
                case "xhtml:link":
                case "video:id":
                    break;
                case "video:restriction":
                    if (attr.name === 'relationship') {
                        currentVideo["restriction:relationship"] = attr.value;
                    }
                    else {
                        console.log("unhandled attr", currentTag, attr.name);
                    }
                    break;
                case "video:price":
                    if (attr.name === 'type') {
                        currentVideo["price:type"] = attr.value;
                    }
                    else if (attr.name === 'currency') {
                        currentVideo["price:currency"] = attr.value;
                    }
                    else if (attr.name === 'resolution') {
                        currentVideo["price:resolution"] = attr.value;
                    }
                    else {
                        console.log('unhandled attr for video:price', attr.name);
                    }
                    break;
                case "video:player_loc":
                    if (attr.name === 'autoplay') {
                        currentVideo["player_loc:autoplay"] = attr.value;
                    }
                    else {
                        console.log('unhandled attr for video:player_loc', attr.name);
                    }
                    break;
                case "video:platform":
                    if (attr.name === 'relationship') {
                        currentVideo["platform:relationship"] = attr.value;
                    }
                    else {
                        console.log('unhandled attr for video:platform', attr.name);
                    }
                    break;
                case "video:gallery_loc":
                    if (attr.name === 'title') {
                        currentVideo["gallery_loc:title"] = attr.value;
                    }
                    else {
                        console.log('unhandled attr for video:galler_loc', attr.name);
                    }
                    break;
                default:
                    console.log('unhandled attr', currentTag, attr.name);
            }
        });
        saxStream.on('closetag', (tag) => {
            switch (tag) {
                case 'url':
                    smi.push(currentItem);
                    currentItem = Object.assign({}, tagTemplate, { video: [], img: [], links: [] });
                    break;
                case "video:video":
                    currentItem.video.push(currentVideo);
                    currentVideo = Object.assign({}, videoTemplate, { tag: [] });
                    break;
                case "image:image":
                    currentItem.img.push(currentImage);
                    currentImage = Object.assign({}, imageTemplate);
                    break;
                case "xhtml:link":
                    if (!dontpushCurrentLink) {
                        currentItem.links.push(currentLink);
                    }
                    currentLink = Object.assign({}, linkTemplate);
                    break;
                default:
                    break;
            }
        });
        return new Promise((resolve, reject) => {
            saxStream.on('end', () => {
                resolve({ urls: smi });
            });
            xml.pipe(saxStream);
            saxStream.on('error', (error) => {
                reject(error);
            });
        });
    });
}
exports.parseSitemap = parseSitemap;
//# sourceMappingURL=sitemap-parser.js.map