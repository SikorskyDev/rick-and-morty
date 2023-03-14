"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./styles/global.css");
var _App = _interopRequireDefault(require("./pages/App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById('root'));
root.render(<_App.default />);