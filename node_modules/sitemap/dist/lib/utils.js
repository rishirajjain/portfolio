"use strict";
/*!
 * Sitemap
 * Copyright(c) 2011 Eugene Kalinin
 * MIT Licensed
 */
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const errors_1 = require("./errors");
const allowDeny = /^allow|deny$/;
const validators = {
    'price:currency': /^[A-Z]{3}$/,
    'price:type': /^rent|purchase|RENT|PURCHASE$/,
    'price:resolution': /^HD|hd|sd|SD$/,
    'platform:relationship': allowDeny,
    'restriction:relationship': allowDeny
};
function validateSMIOptions(conf, level = types_1.ErrorLevel.WARN) {
    if (!conf) {
        throw new errors_1.NoConfigError();
    }
    if (level === types_1.ErrorLevel.SILENT) {
        return conf;
    }
    const { url, changefreq, priority, news, video } = conf;
    if (!url) {
        if (level === types_1.ErrorLevel.THROW) {
            throw new errors_1.NoURLError();
        }
        else {
            console.warn('URL is required');
        }
    }
    if (changefreq) {
        if (types_1.CHANGEFREQ.indexOf(changefreq) === -1) {
            if (level === types_1.ErrorLevel.THROW) {
                throw new errors_1.ChangeFreqInvalidError();
            }
            else {
                console.warn(`${url}: changefreq ${changefreq} is not valid`);
            }
        }
    }
    if (priority) {
        if (!(priority >= 0.0 && priority <= 1.0) || typeof priority !== 'number') {
            if (level === types_1.ErrorLevel.THROW) {
                throw new errors_1.PriorityInvalidError();
            }
            else {
                console.warn(`${url}: priority ${priority} is not valid`);
            }
        }
    }
    if (news) {
        if (news.access &&
            news.access !== 'Registration' &&
            news.access !== 'Subscription') {
            if (level === types_1.ErrorLevel.THROW) {
                throw new errors_1.InvalidNewsAccessValue();
            }
            else {
                console.warn(`${url}: news access ${news.access} is invalid`);
            }
        }
        if (!news.publication ||
            !news.publication.name ||
            !news.publication.language ||
            !news.publication_date ||
            !news.title) {
            if (level === types_1.ErrorLevel.THROW) {
                throw new errors_1.InvalidNewsFormat();
            }
            else {
                console.warn(`${url}: missing required news property`);
            }
        }
    }
    if (video) {
        video.forEach((vid) => {
            if (vid.duration !== undefined) {
                if (vid.duration < 0 || vid.duration > 28800) {
                    if (level === types_1.ErrorLevel.THROW) {
                        throw new errors_1.InvalidVideoDuration();
                    }
                    else {
                        console.warn(`${url}: video duration ${vid.duration} is invalid`);
                    }
                }
            }
            if (vid.rating !== undefined && (vid.rating < 0 || vid.rating > 5)) {
                console.warn(`${url}: video ${vid.title} rating ${vid.rating} must be between 0 and 5 inclusive`);
            }
            if (typeof (vid) !== 'object' || !vid.thumbnail_loc || !vid.title || !vid.description) {
                // has to be an object and include required categories https://support.google.com/webmasters/answer/80471?hl=en&ref_topic=4581190
                if (level === types_1.ErrorLevel.THROW) {
                    throw new errors_1.InvalidVideoFormat();
                }
                else {
                    console.warn(`${url}: missing required video property`);
                }
            }
            if (vid.description.length > 2048) {
                if (level === types_1.ErrorLevel.THROW) {
                    throw new errors_1.InvalidVideoDescription();
                }
                else {
                    console.warn(`${url}: video description is too long`);
                }
            }
            Object.keys(vid).forEach((key) => {
                // @ts-ignore
                if (validators[key] && !validators[key].test(vid[key])) {
                    if (level === types_1.ErrorLevel.THROW) {
                        // @ts-ignore
                        throw new errors_1.InvalidAttrValue(key, vid[key], validators[key]);
                    }
                    else {
                        // @ts-ignore
                        console.warn(`${url}: video key ${key} has invalid value: ${vid[key]}`);
                    }
                }
            });
        });
    }
    return conf;
}
exports.validateSMIOptions = validateSMIOptions;
/**
 * Based on lodash's implementation of chunk.
 *
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 *
 * Based on Underscore.js, copyright Jeremy Ashkenas,
 * DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
 *
 * This software consists of voluntary contributions made by many
 * individuals. For exact contribution history, see the revision history
 * available at https://github.com/lodash/lodash
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
function chunk(array, size = 1) {
    size = Math.max(Math.trunc(size), 0);
    const length = array ? array.length : 0;
    if (!length || size < 1) {
        return [];
    }
    const result = Array(Math.ceil(length / size));
    let index = 0, resIndex = 0;
    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
}
exports.chunk = chunk;
//# sourceMappingURL=utils.js.map