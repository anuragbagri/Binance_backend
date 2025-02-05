"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// @ts-ignore
const prisma = (_a = globalThis.prisma) !== null && _a !== void 0 ? _a : new client_1.PrismaClient();
// @ts-ignore
if (process.env.NODE_ENV !== "production")
    globalThis.prisma = prisma;
exports.default = prisma;
