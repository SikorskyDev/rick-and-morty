"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _ai = require("react-icons/ai");
var _reactRouterDom = require("react-router-dom");
var _charactersApi = require("../redux/charactersApi");
var _ImageByReact = _interopRequireDefault(require("../components/ImageByReact/ImageByReact"));
var _reactLoadingIcons = require("react-loading-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CharacterDetailsContainer = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__CharacterDetailsContainer"
})(["max-width:1540px;padding:21px 50px;display:flex;flex-direction:column;align-items:center;@media (max-width:448px){padding:21px 35px;}"]);
var GoBackCSS = (0, _styledComponents.default)(_reactRouterDom.Link).withConfig({
  displayName: "CharacterDetails__GoBackCSS"
})(["align-self:flex-start;font-family:\"Roboto Bold\";font-weight:normal;font-style:normal;font-size:18px;line-height:21px;color:#000000;gap:8px;margin-bottom:31px;display:flex;align-items:center;transition:all 0.3s ease-in-out;:hover{transform:scale(1.03);transition:all 0.3s ease-in-out;}"]);
var GoBackArrowCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__GoBackArrowCSS"
})(["width:24px;height:24px;"]);
var AvatarOfCharacterCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__AvatarOfCharacterCSS"
})(["border:5px solid #f2f2f7;width:300px;height:300px;border-radius:50%;overflow:hidden;margin-bottom:16px;@media (max-width:448px){width:150px;height:150px;margin-bottom:34px;}"]);
var CharacterTitleCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__CharacterTitleCSS"
})(["font-family:\"Roboto Regular\";font-weight:normal;font-style:normal;font-size:48px;line-height:56px;color:#081f32;text-align:center;@media (max-width:448px){font-size:32px;}"]);
var CharacterSubTitleCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__CharacterSubTitleCSS"
})(["font-size:20px;line-height:24px;letter-spacing:0.15px;color:#8e8e93;margin:48px 0;@media (max-width:448px){font-size:20px;line-height:24px;align-self:flex-start;margin-top:34px;margin-bottom:16px;}"]);
var CharacterInformationsCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__CharacterInformationsCSS"
})(["width:413px;display:flex;flex-direction:column;@media (max-width:448px){width:312px;}@media (max-width:332px){width:260px;}@media (max-width:290px){width:200px;}"]);
var InformationsNameCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__InformationsNameCSS"
})(["font-family:\"Roboto Bold\";font-weight:normal;font-style:normal;font-size:16px;line-height:24px;letter-spacing:0.15px;color:#081f32;"]);
var InformationsStatusCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__InformationsStatusCSS"
})(["font-family:\"Roboto Regular\";font-weight:normal;font-style:normal;font-size:14px;line-height:20px;letter-spacing:0.25px;color:#6e798c;"]);
var LineCSS = _styledComponents.default.div.withConfig({
  displayName: "CharacterDetails__LineCSS"
})(["height:0.5px;width:100%;background-color:#b0b0b0;margin-top:6px;margin-bottom:6px;"]);
var CharacterDetails = function CharacterDetails() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var _useGetCharacterByIdQ = (0, _charactersApi.useGetCharacterByIdQuery)("".concat(id)),
    data = _useGetCharacterByIdQ.data,
    isSuccess = _useGetCharacterByIdQ.isSuccess,
    isLoading = _useGetCharacterByIdQ.isLoading,
    isError = _useGetCharacterByIdQ.isError;
  return <CharacterDetailsContainer>
            <GoBackCSS to={"/"}>
                <GoBackArrowCSS>
                    <_ai.AiOutlineArrowLeft style={{
          height: "100%",
          width: "100%"
        }} />
                </GoBackArrowCSS>
                GO BACK
            </GoBackCSS>
            {isError && <h2>Error Fetching data =(</h2>}
            {isLoading && <_reactLoadingIcons.SpinningCircles />}
            {isSuccess && <>
                    <AvatarOfCharacterCSS>
                        <_ImageByReact.default src={data.image} />
                    </AvatarOfCharacterCSS>
                    <CharacterTitleCSS>{data.name}</CharacterTitleCSS>
                    <CharacterSubTitleCSS>Informations</CharacterSubTitleCSS>
                    <CharacterInformationsCSS>
                        <InformationsNameCSS>Gender</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.gender}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Status</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.status}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Specie</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.species}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Origin</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {data.origin.name}
                        </InformationsStatusCSS>
                        <LineCSS />
                        <InformationsNameCSS>Type</InformationsNameCSS>
                        <InformationsStatusCSS>
                            {!data.type ? "unknown" : data.type}
                        </InformationsStatusCSS>
                        <LineCSS />
                    </CharacterInformationsCSS>
                </>}
        </CharacterDetailsContainer>;
};
var _default = CharacterDetails;
exports.default = _default;