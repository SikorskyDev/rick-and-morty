"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _bi = require("react-icons/bi");
var _ContainerCSS = require("../MyStyledComponents/ContainerCSS");
var _store = require("../../redux/store");
var _searchInputSlice = require("../../redux/searchInputSlice");
var _reactRedux = require("react-redux");
var _lodash = _interopRequireDefault(require("lodash.debounce"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SearchCSS = _styledComponents.default.div.withConfig({
  displayName: "Search__SearchCSS"
})(["width:100%;margin-bottom:51px;"]);
var InputContainerCSS = _styledComponents.default.div.withConfig({
  displayName: "Search__InputContainerCSS"
})(["position:relative;"]);
var InputCSS = _styledComponents.default.input.withConfig({
  displayName: "Search__InputCSS"
})(["height:56px;padding-left:40px;border:1px solid rgba(0,0,0,0.5);border-radius:8px;width:100%;"]);
var SearchIconCSS = (0, _styledComponents.default)(_bi.BiSearch).withConfig({
  displayName: "Search__SearchIconCSS"
})(["position:absolute;top:50%;left:12px;transform:translateY(-50%);font-size:20px;"]);
var Search = function Search() {
  var dispatch = (0, _store.useAppDispatch)();
  var _React$useState = _react.default.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputChangeValue = _React$useState2[0],
    setInputChangeValue = _React$useState2[1];
  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.searchInputSlice;
    }),
    inputValue = _useSelector.inputValue;
  var updateSearchValue = _react.default.useCallback((0, _lodash.default)(function (str) {
    dispatch((0, _searchInputSlice.setInputValue)(str));
  }, 500), []);
  var handleInputChange = function handleInputChange(e) {
    setInputChangeValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  _react.default.useEffect(function () {
    var storedSearchText = localStorage.getItem("searchText");
    if (storedSearchText) {
      dispatch((0, _searchInputSlice.setInputValue)(storedSearchText));
      setInputChangeValue(storedSearchText);
    }
  }, [dispatch]);
  _react.default.useEffect(function () {
    localStorage.setItem("searchText", inputValue);
  }, [inputValue]);
  return <SearchCSS>
            <_ContainerCSS.ContainerCSS>
                <InputContainerCSS>
                    <SearchIconCSS />
                    <InputCSS type="text" placeholder="Filter by name..." value={inputChangeValue} onChange={handleInputChange} />
                </InputContainerCSS>
            </_ContainerCSS.ContainerCSS>
        </SearchCSS>;
};
var _default = Search;
exports.default = _default;