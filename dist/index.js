"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./styles/global.css");
var _App = _interopRequireDefault(require("./pages/App"));
var _reactRedux = require("react-redux");
var _store = require("./redux/store");
var _reactRouterDom = require("react-router-dom");
var _CharacterDetails = _interopRequireDefault(require("./pages/CharacterDetails"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var root = _client.default.createRoot(document.getElementById("root"));
root.render(<_reactRouterDom.BrowserRouter>
        <_reactRedux.Provider store={_store.store}>
            <_reactRouterDom.Routes>
                <_reactRouterDom.Route path="/" element={<_App.default />} />
                <_reactRouterDom.Route path="/:id" element={<_CharacterDetails.default />} />
                <_reactRouterDom.Route path="*" element={<div style={{
        textAlign: "center"
      }}>Not Found</div>} />
            </_reactRouterDom.Routes>
        </_reactRedux.Provider>
    </_reactRouterDom.BrowserRouter>);