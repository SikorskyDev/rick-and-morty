"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ImageByReact = _interopRequireDefault(require("../components/ImageByReact/ImageByReact"));
var _rickAndMorty = _interopRequireDefault(require("../assets/img/rickAndMorty.png"));
var _Search = _interopRequireDefault(require("../components/Search/Search"));
var _CharactersList = _interopRequireDefault(require("../components/CharactersList/CharactersList"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var WrapperCSS = _styledComponents.default.div.withConfig({
  displayName: "App__WrapperCSS"
})(["min-height:100vh;display:flex;flex-direction:column;overflow:hidden;align-items:center;"]);
var MainImageCSS = _styledComponents.default.div.withConfig({
  displayName: "App__MainImageCSS"
})(["max-width:600px;max-height:200px;margin-top:86px;margin-bottom:16px;"]);
function App() {
  return <WrapperCSS>
            <MainImageCSS>
                <_ImageByReact.default src={_rickAndMorty.default} />
            </MainImageCSS>
            <_Search.default />
            <_CharactersList.default />
        </WrapperCSS>;
}
var _default = App;
exports.default = _default;