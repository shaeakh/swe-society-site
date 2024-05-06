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
const express_1 = __importDefault(require("express"));
const dbconnect_1 = require("./db/dbconnect");
const tables_1 = require("./db/tables");
const auth_1 = __importDefault(require("./routes/auth"));
const generalNotice_1 = __importDefault(require("./routes/generalNotice"));
const cors_1 = __importDefault(require("cors"));
const PORT = 5050;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.get("/", (req, res) => {
    res.send("Swe society starting");
});
app.use("/auth", auth_1.default);
app.use("/notice", generalNotice_1.default);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    // await connectToDB();
    yield (0, dbconnect_1.testDatabaseConnection)();
    yield (0, tables_1.createTables)();
    console.log(`Server is running in ${PORT}`);
}));
