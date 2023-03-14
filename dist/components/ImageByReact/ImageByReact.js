"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactImage = require("react-image");
var _reactLoadingIcons = require("react-loading-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ImageByReact = function ImageByReact(_ref) {
  var src = _ref.src;
  return <_reactImage.Img src={src} alt="My Image" decode={true} style={{
    width: "100%",
    height: "auto"
  }} loader={<_reactLoadingIcons.SpinningCircles />} />;
};
var _default = ImageByReact;
exports.default = _default;