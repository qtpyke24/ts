"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = exports.autocomplete = exports.autocorrect = void 0;
var autocorrect_1 = require("./autocorrect");
Object.defineProperty(exports, "autocorrect", { enumerable: true, get: function () { return autocorrect_1.autocorrect; } });
var autocomplete_1 = require("./autocomplete");
Object.defineProperty(exports, "autocomplete", { enumerable: true, get: function () { return autocomplete_1.autocomplete; } });
var tokenizer_1 = require("./tokenizer");
Object.defineProperty(exports, "tokenize", { enumerable: true, get: function () { return tokenizer_1.tokenize; } });
