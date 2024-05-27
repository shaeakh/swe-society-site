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
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailgen_1 = __importDefault(require("mailgen"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MAIL_EMAIL = process.env.MAIL_EMAIL;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
const sendMail = (regno, email, subject, introMessage, outroMessage) => __awaiter(void 0, void 0, void 0, function* () {
    let config = {
        service: "gmail",
        auth: {
            user: MAIL_EMAIL,
            pass: MAIL_PASSWORD,
        }
    };
    let transporter = nodemailer_1.default.createTransport(config);
    let MailGenerator = new mailgen_1.default({
        theme: "default",
        product: {
            name: "SUST SWE Society",
            link: "https://www.facebook.com/swesocietysust",
        },
    });
    let response = {
        body: {
            regno: regno,
            intro: introMessage, // "Pass from Society is " + otp,
            outro: outroMessage, // "Your Pass is for 5 minutes\nBest Regards, Team EcoSync",
            // signature: 'Best regards, Team Sohoj Thikadari'
            signature: false,
        },
    };
    let mail = MailGenerator.generate(response);
    let message = {
        from: MAIL_EMAIL,
        to: email,
        subject: subject,
        html: mail,
    };
    yield transporter.sendMail(message);
});
exports.sendMail = sendMail;
