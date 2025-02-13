"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOOL_ID = exports.EVENTS = exports.ADDON_ID = void 0;
var ADDON_ID = "storybook/tailwind-dark-mode";
exports.ADDON_ID = ADDON_ID;
var TOOL_ID = "".concat(ADDON_ID, "/tool");
exports.TOOL_ID = TOOL_ID;
var EVENTS = {
  RESULT: "".concat(ADDON_ID, "/result"),
  REQUEST: "".concat(ADDON_ID, "/request"),
  CLEAR: "".concat(ADDON_ID, "/clear")
};
exports.EVENTS = EVENTS;