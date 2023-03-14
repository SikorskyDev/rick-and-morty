"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setInputValue = exports.searchInputSlice = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var initialState = {
  inputValue: ''
};
var searchInputSlice = (0, _toolkit.createSlice)({
  name: 'searchInput',
  initialState: initialState,
  reducers: {
    setInputValue: function setInputValue(state, action) {
      state.inputValue = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
exports.searchInputSlice = searchInputSlice;
var setInputValue = searchInputSlice.actions.setInputValue;
exports.setInputValue = setInputValue;
var _default = searchInputSlice.reducer;
exports.default = _default;