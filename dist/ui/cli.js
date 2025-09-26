"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const autocomplete_1 = require("../core/autocomplete");
const autocorrect_1 = require("../core/autocorrect");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.setPrompt("Nhập từ: ");
rl.prompt();
rl.on("line", (line) => {
    console.log("🔹 Gợi ý:", (0, autocomplete_1.autocomplete)(line));
    console.log("🔹 Sửa lỗi:", (0, autocorrect_1.autocorrect)(line));
    rl.prompt();
});
