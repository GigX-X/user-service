"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// import { config } from "dotenv";
// config();
// console.log(process.env.MONGODB_URI);
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log("connected to MongoDB");
    }
    catch (error) {
        console.error(`Error connecting to usersDB: ${error}`);
        process.exit(1);
    }
};
exports.default = connectDB;
