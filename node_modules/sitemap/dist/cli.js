#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const readline_1 = require("readline");
const fs_1 = require("fs");
const xmllint_1 = require("./lib/xmllint");
const errors_1 = require("./lib/errors");
const sitemap_parser_1 = require("./lib/sitemap-parser");
console.warn('CLI is new and likely to change quite a bit. Please send feature/bug requests to https://github.com/ekalinin/sitemap.js/issues');
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const arg = require('arg');
const preamble = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">';
const closetag = '</urlset>';
let first = true;
const println = (line) => {
    if (first) {
        first = false;
        process.stdout.write(preamble);
    }
    process.stdout.write(index_1.SitemapItem.justItem(index_1.Sitemap.normalizeURL(line)));
};
function processStreams(streams, isJSON = false) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let stream of streams) {
            yield new Promise((resolve) => {
                const rl = readline_1.createInterface({
                    input: stream
                });
                rl.on('line', (line) => println(isJSON ? JSON.parse(line) : line));
                rl.on('close', () => {
                    resolve();
                });
            });
        }
        process.stdout.write(closetag);
        return true;
    });
}
const argSpec = {
    '--help': Boolean,
    '--version': Boolean,
    '--json': Boolean,
    '--validate': Boolean,
    '--parse': Boolean,
    '--line-separated': Boolean
};
const argv = arg(argSpec);
function getStream() {
    if (argv._ && argv._.length) {
        return fs_1.createReadStream(argv._[0]);
    }
    else {
        console.warn('Reading from stdin. If you are not piping anything in, this command is not doing anything');
        return process.stdin;
    }
}
if (argv['--version']) {
    /* eslint-disable-next-line @typescript-eslint/no-var-requires */
    const packagejson = require('../package.json');
    console.log(packagejson.version);
}
else if (argv['--help']) {
    // TODO stream a full JSON configuration in
    // TODO allow user to append entry to existing xml
    console.log(`
Turn a list of urls into a sitemap xml.
Options:
  --help           Print this text
  --version        Print the version
  --json           Parse each line as json and feed to Sitemap
  --parse          Parse fed xml and spit out config
  --line-separated When used with parse, it spits out each entry as json rather
                   than the whole json. This can be then consumed with --json by
                   the cli
`);
}
else if (argv['--parse']) {
    sitemap_parser_1.parseSitemap(getStream()).then((items) => {
        if (argv['--line-separated'] && items.urls) {
            items.urls.forEach((url) => {
                console.log(JSON.stringify(url));
            });
        }
        else {
            console.log(JSON.stringify(items));
        }
    });
}
else if (argv['--validate']) {
    xmllint_1.xmlLint(getStream())
        .then(() => console.log('valid'))
        .catch(([error, stderr]) => {
        if (error instanceof errors_1.XMLLintUnavailable) {
            console.error(error.message);
            return;
        }
        else {
            console.log(stderr);
        }
    });
}
else {
    let streams;
    if (!argv._.length) {
        streams = [process.stdin];
    }
    else {
        streams = argv._.map((file) => fs_1.createReadStream(file, { encoding: 'utf8' }));
    }
    processStreams(streams, argv['--json']);
}
//# sourceMappingURL=cli.js.map