"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ImageByReact = _interopRequireDefault(require("../ImageByReact/ImageByReact"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CharacterCSS = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "Character__CharacterCSS"
})(["max-width:312px;max-height:308px;min-width:240px;min-height:244px;box-shadow:0px 1px 5px rgba(0,0,0,0.2),0px 3px 4px rgba(0,0,0,0.12),0px 2px 4px rgba(0,0,0,0.14);border-radius:4px;display:flex;flex-direction:column;transition:all 0.3s ease-in-out;:hover{transform:scale(1.03);transition:all 0.3s ease-in-out;}"]);
var CharacterAvatarCSS = _styledComponents.default.div.withConfig({
  displayName: "Character__CharacterAvatarCSS"
})(["overflow:hidden;flex:1 1 auto;"]);
var CharacterInfoCSS = _styledComponents.default.div.withConfig({
  displayName: "Character__CharacterInfoCSS"
})(["flex:1 0 auto;padding:12px 16px;display:flex;flex-direction:column;"]);
var CharacterNameCSS = _styledComponents.default.div.withConfig({
  displayName: "Character__CharacterNameCSS"
})(["font-family:\"Roboto Medium\";font-weight:normal;font-style:normal;font-size:20px;line-height:30px;letter-spacing:0.15px;color:rgba(0,0,0,0.87);"]);
var CharacterSpeciesCSS = _styledComponents.default.div.withConfig({
  displayName: "Character__CharacterSpeciesCSS"
})(["font-family:\"Roboto Regular\";font-weight:normal;font-style:normal;font-size:14px;line-height:21px;letter-spacing:0.25px;color:rgba(0,0,0,0.6);"]);
var Character = function Character(_ref) {
  var characterInfo = _ref.characterInfo;
  return <CharacterCSS to={"/".concat(characterInfo.id)}>
            <CharacterAvatarCSS>
                <_ImageByReact.default src={characterInfo.image} />
            </CharacterAvatarCSS>
            <CharacterInfoCSS>
                <CharacterNameCSS>{characterInfo.name}</CharacterNameCSS>
                <CharacterSpeciesCSS>
                    {characterInfo.species}
                </CharacterSpeciesCSS>
            </CharacterInfoCSS>
        </CharacterCSS>;
};
var _default = Character;
exports.default = _default;