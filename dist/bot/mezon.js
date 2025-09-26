"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mezon_sdk_1 = __importDefault(require("mezon-sdk"));
const autocorrect_1 = require("../core/autocorrect");
// Lấy AppId từ biến môi trường
const APP_ID = process.env.MEZON_APPID || "";
if (!APP_ID) {
    console.error("❌ Chưa có MEZON_APPID trong .env");
    process.exit(1);
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new mezon_sdk_1.default("apiKey"); // nếu cần apiKey
        try {
            const session = yield client.authenticate(APP_ID);
            console.log("✅ Bot authenticated:", session);
            // Lắng nghe tin nhắn (giả định SDK có sự kiện message giống Discord)
            client.on("message", (msg) => {
                var _a;
                if ((_a = msg.author) === null || _a === void 0 ? void 0 : _a.bot)
                    return;
                if (msg.content.startsWith("*chinhta")) {
                    const text = msg.content.replace("*chinhta", "").trim();
                    if (!text) {
                        client.reply(msg, "❌ Bạn chưa nhập nội dung.");
                        return;
                    }
                    const words = text.split(/\s+/).map(autocorrect_1.autocorrect);
                    const corrected = words.join(" ");
                    client.reply(msg, `🔹 Bạn có ý muốn viết: "${corrected}"`);
                }
            });
        }
        catch (err) {
            console.error("❌ Lỗi authenticate:", err);
        }
    });
}
main();
