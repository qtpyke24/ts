"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
const vocabulary_1 = require("../data/vocabulary");
const tokenizer_1 = require("./tokenizer");
const vocabulary = (0, vocabulary_1.loadVocabulary)();
function autocomplete(input) {
    const tokens = (0, tokenizer_1.tokenize)(input);
    const lastWord = tokens[tokens.length - 1];
    return vocabulary
        .filter(word => word.startsWith(lastWord))
        .slice(0, 10);
}
