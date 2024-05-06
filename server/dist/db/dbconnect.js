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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = exports.testDatabaseConnection = void 0;
const pg_1 = require("pg");
const connectionString = 'postgresql://mypostgres:iictSUST1060@society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com:5432/societysite';
const pool = new pg_1.Pool({
    // user: "mypostgres",
    // password: "iictSUST1060",
    // host: "society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com",
    // port: 5432,
    // database: "societysite"
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "societysite"
});
const client = new pg_1.Client({
    connectionString: connectionString
});
function testDatabaseConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pool.query('SELECT 1');
            console.log('Database connected successfully');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    });
}
exports.testDatabaseConnection = testDatabaseConnection;
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log('Connected to PostgreSQL database');
        }
        catch (error) {
            console.error('Error connecting to PostgreSQL database:');
        }
    });
}
exports.connectToDB = connectToDB;
exports.default = pool;
//psql -h society-db-1.cpsw4s4as3ri.us-east-1.rds.amazonaws.com -U mypostgres -d societysite -p 5432
