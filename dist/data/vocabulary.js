"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadVocabulary = loadVocabulary;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function loadVocabulary() {
    const filePath = path_1.default.join(__dirname, "Viet74K.txt");
    const content = fs_1.default.readFileSync(filePath, "utf-8");
    return content
        .split('\n')
        .map(w => w.trim())
        .filter(Boolean);
}
