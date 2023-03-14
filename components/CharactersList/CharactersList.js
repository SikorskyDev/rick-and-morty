"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Character = _interopRequireDefault(require("../Character/Character"));
var _ContainerCSS = require("../MyStyledComponents/ContainerCSS");
var _charactersApi = require("../../redux/charactersApi");
var _reactLoadingIcons = require("react-loading-icons");
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CharactersListCSS = _styledComponents.default.div.withConfig({
  displayName: "CharactersList__CharactersListCSS"
})(["margin-bottom:168px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(2,1fr);grid-column-gap:20px;grid-row-gap:24px;justify-items:center;@media (max-width:1050px){grid-template-columns:repeat(3,1fr);}@media (max-width:790px){grid-template-columns:repeat(2,1fr);}@media (max-width:550px){grid-template-columns:repeat(1,1fr);}"]);
var CharactersList = function CharactersList() {
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.searchInputSlice;
    }),
    inputValue = _useSelector.inputValue;
  var _useGetCharactersQuer = (0, _charactersApi.useGetCharactersQuery)(inputValue, {
      refetchOnMountOrArgChange: true
    }),
    data = _useGetCharactersQuer.data,
    error = _useGetCharactersQuer.error,
    isLoading = _useGetCharactersQuer.isLoading,
    isSuccess = _useGetCharactersQuer.isSuccess;
  return <_ContainerCSS.ContainerCSS>
            <CharactersListCSS>
                {error && <h2>Not Found</h2>}

                {isLoading && <_reactLoadingIcons.SpinningCircles />}

                {isSuccess && data.results.map(function (character) {
        return <_Character.default key={character.id} characterInfo={character} />;
      })}
            </CharactersListCSS>
        </_ContainerCSS.ContainerCSS>;
};
var _default = CharactersList;
exports.default = _default;