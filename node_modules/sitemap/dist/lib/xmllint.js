"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const errors_1 = require("./errors");
/**
 * Verify the passed in xml is valid
 * @param xml what you want validated
 * @return {Promise<null>} resolves on valid rejects [error stderr]
 */
function xmlLint(xml) {
    let args = ['--schema', './schema/all.xsd', '--noout', '-'];
    if (typeof xml === 'string') {
        args[args.length - 1] = xml;
    }
    return new Promise((resolve, reject) => {
        child_process_1.execFile('which', ['xmllint'], (error, stdout, stderr) => {
            if (error) {
                reject([new errors_1.XMLLintUnavailable()]);
                return;
            }
            let xmllint = child_process_1.execFile('xmllint', args, (error, stdout, stderr) => {
                // @ts-ignore
                if (error && error.code) {
                    reject([error, stderr]);
                }
                resolve();
            });
            if (xmllint.stdout) {
                xmllint.stdout.unpipe();
                if ((typeof xml !== 'string') && xml && xmllint.stdin) {
                    xml.pipe(xmllint.stdin);
                }
            }
        });
    });
}
exports.xmlLint = xmlLint;
//# sourceMappingURL=xmllint.js.map