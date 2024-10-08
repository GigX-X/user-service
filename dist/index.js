"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = __importDefault(require("../src/infrastructure/db/mongodb"));
const dotenv_1 = require("dotenv");
const auth_route_1 = __importDefault(require("../src/presentation/routes/auth.route"));
(0, dotenv_1.config)({ path: __dirname + "/../.env" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", auth_route_1.default);
(0, mongodb_1.default)();
app.listen(process.env.PORT, () => console.log("user service listening actively..."));
