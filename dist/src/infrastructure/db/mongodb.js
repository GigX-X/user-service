"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
    }
    catch (error) {
        console.error(`Error connecting to usersDB: ${error}`);
        process.exit(1);
    }
};
exports.default = connectDB;
