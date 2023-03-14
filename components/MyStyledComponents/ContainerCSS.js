"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerCSS = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ContainerCSS = _styledComponents.default.div.withConfig({
  displayName: "ContainerCSS"
})(["max-width:1050px;margin:0 auto;padding:0 15px;width:", ";"], function (props) {
  return props.width ? props.width : "100%";
});
exports.ContainerCSS = ContainerCSS;