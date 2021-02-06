/// <reference types="node" />
import 'v8-compile-cache';
import { TransformOptions } from './types';
export declare type JITIOptions = {
    transform?: (opts: TransformOptions) => string;
    debug?: boolean;
    cache?: boolean;
    cacheDir?: string;
};
export default function createJITI(_filename?: string, opts?: JITIOptions): NodeRequire;
