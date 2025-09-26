"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const autocomplete_1 = require("../core/autocomplete");
const autocorrect_1 = require("../core/autocorrect");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Endpoint webhook nhận tin nhắn từ Mezon
app.post("/webhook/mezon", (req, res) => {
    const { message, sender } = req.body;
    if (!message) {
        return res.status(400).json({ error: "No message received" });
    }
    const suggestions = (0, autocomplete_1.autocomplete)(message);
    const correction = (0, autocorrect_1.autocorrect)(message);
    let reply = "";
    if (suggestions.length > 0) {
        reply += `🔮 Gợi ý: ${suggestions.join(", ")}\n`;
    }
    if (correction) {
        reply += `✅ Sửa lỗi: ${correction}`;
    }
    // Trả về response để Mezon hiển thị
    res.json({
        recipient: sender,
        reply: reply || "🤖 Không có gợi ý nào."
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Mezon bot webhook chạy tại http://localhost:${PORT}/webhook/mezon`);
});
