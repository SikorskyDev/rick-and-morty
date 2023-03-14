"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGetCharactersQuery = exports.useGetCharacterByIdQuery = exports.charactersApi = void 0;
var _react = require("@reduxjs/toolkit/query/react");
var charactersApi = (0, _react.createApi)({
  reducerPath: "charactersApi",
  baseQuery: (0, _react.fetchBaseQuery)({
    baseUrl: "https://rickandmortyapi.com/api"
  }),
  endpoints: function endpoints(builder) {
    return {
      getCharacters: builder.query({
        query: function query() {
          var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return name ? "/character?name=".concat(name) : "/character/";
        }
      }),
      getCharacterById: builder.query({
        query: function query(id) {
          return "/character/".concat(id);
        }
      })
    };
  }
});
exports.charactersApi = charactersApi;
var useGetCharactersQuery = charactersApi.useGetCharactersQuery,
  useGetCharacterByIdQuery = charactersApi.useGetCharacterByIdQuery;
exports.useGetCharacterByIdQuery = useGetCharacterByIdQuery;
exports.useGetCharactersQuery = useGetCharactersQuery;