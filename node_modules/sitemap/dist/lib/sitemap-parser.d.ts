/// <reference types="node" />
import { Readable } from 'stream';
import { ISitemapOptions } from './sitemap';
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
export declare function parseSitemap(xml: Readable): Promise<ISitemapOptions>;
