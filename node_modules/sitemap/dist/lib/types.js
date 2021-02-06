"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// can't be const enum if we use babel to compile
// https://github.com/babel/babel/issues/8741
var EnumChangefreq;
(function (EnumChangefreq) {
    EnumChangefreq["DAILY"] = "daily";
    EnumChangefreq["MONTHLY"] = "monthly";
    EnumChangefreq["ALWAYS"] = "always";
    EnumChangefreq["HOURLY"] = "hourly";
    EnumChangefreq["WEEKLY"] = "weekly";
    EnumChangefreq["YEARLY"] = "yearly";
    EnumChangefreq["NEVER"] = "never";
})(EnumChangefreq = exports.EnumChangefreq || (exports.EnumChangefreq = {}));
exports.CHANGEFREQ = [
    EnumChangefreq.ALWAYS,
    EnumChangefreq.HOURLY,
    EnumChangefreq.DAILY,
    EnumChangefreq.WEEKLY,
    EnumChangefreq.MONTHLY,
    EnumChangefreq.YEARLY,
    EnumChangefreq.NEVER
];
var EnumYesNo;
(function (EnumYesNo) {
    EnumYesNo["YES"] = "YES";
    EnumYesNo["NO"] = "NO";
    EnumYesNo["Yes"] = "Yes";
    EnumYesNo["No"] = "No";
    EnumYesNo["yes"] = "yes";
    EnumYesNo["no"] = "no";
})(EnumYesNo = exports.EnumYesNo || (exports.EnumYesNo = {}));
var EnumAllowDeny;
(function (EnumAllowDeny) {
    EnumAllowDeny["ALLOW"] = "allow";
    EnumAllowDeny["DENY"] = "deny";
})(EnumAllowDeny = exports.EnumAllowDeny || (exports.EnumAllowDeny = {}));
/**
 * How to handle errors in passed in urls
 */
var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel["SILENT"] = "silent";
    ErrorLevel["WARN"] = "warn";
    ErrorLevel["THROW"] = "throw";
})(ErrorLevel = exports.ErrorLevel || (exports.ErrorLevel = {}));
//# sourceMappingURL=types.js.map