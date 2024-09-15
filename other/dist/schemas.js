"use strict";
exports.__esModule = true;
exports.RegisterSchema = exports.loginSchema = void 0;
var zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string(),
    remember: zod_1.z.boolean().optional()
});
exports.RegisterSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    user: zod_1.z.string(),
    password: zod_1.z.string(),
    confirm_password: zod_1.z.string()
});
