/// <reference types="node" />
import { Readable } from 'stream';
/**
 * Verify the passed in xml is valid
 * @param xml what you want validated
 * @return {Promise<null>} resolves on valid rejects [error stderr]
 */
export declare function xmlLint(xml: string | Readable): Promise<null>;
