"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const core_1 = require("../core");
const app = (0, express_1.default)();
app.use(express_1.default.json());
//endpoint cho autocomplete
app.get('/autocomplete', (req, res) => {
    const input = req.query.input || '';
    res.json({ input, suggestions: (0, core_1.autocomplete)(input) });
});
//endpoint cho autocorrect
app.get('/autocorrect', (req, res) => {
    const input = req.query.input || '';
    res.json({ input, corrections: (0, core_1.autocorrect)(input) });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 API server chạy tại http://localhost:${PORT}`);
    console.log(`🔹 Test: http://localhost:${PORT}/autocomplete?input=ăn`);
});
