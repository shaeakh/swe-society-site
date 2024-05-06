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
exports.createTables = void 0;
const dbconnect_1 = __importDefault(require("./dbconnect"));
function createTables() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield dbconnect_1.default.query(`
        CREATE TABLE IF NOT EXISTS Users (
            userId SERIAL PRIMARY KEY,
            fullname VARCHAR(100),
            password VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            profile_picture VARCHAR(200),
            regno VARCHAR(20) UNIQUE NOT NULL,
            session VARCHAR(10),
            phone_number VARCHAR(15),
            bio TEXT,
            linkedin_id VARCHAR(100),
            github_id VARCHAR(100),
            stop_stalk_id VARCHAR(100),
            whatsapp VARCHAR(20),
            facebook_id VARCHAR(100),
            blood_group VARCHAR(5),
            school VARCHAR(100),
            college VARCHAR(100),
            hometown VARCHAR(100),
            CV VARCHAR(200),
            experience TEXT[],
            projects TEXT[],
            is_alumni BOOLEAN DEFAULT FALSE,
            role VARCHAR(20) NOT NULL DEFAULT 'general_member'
        );

        CREATE TABLE IF NOT EXISTS GeneralNotices (
            noticeId SERIAL PRIMARY KEY,
            notice_provider INT,
            notice_date DATE,
            expire_date DATE,
            headline VARCHAR(200),
            notice_body TEXT,
            picture TEXT,
            file TEXT,
            FOREIGN KEY (notice_provider) REFERENCES Users(userId) ON DELETE CASCADE

        );

        `);
            console.log('Tables created successfully');
        }
        catch (error) {
            console.error('Unable to create any table:', error);
        }
    });
}
exports.createTables = createTables;
