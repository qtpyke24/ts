"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenize = tokenize;
function tokenize(input) {
    return input.toLowerCase().split(/\s+/);
}
