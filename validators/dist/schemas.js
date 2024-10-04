"use strict";
exports.__esModule = true;
exports.RegisterSchema = exports.loginSchema = void 0;
var zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
        .min(5, { message: "el campo debe tener minimo 5 caracteres" })
        .max(50, { message: "el campo debe tener minimo 50 caracteres" }),
    remember: zod_1.z.boolean().optional()
});
exports.RegisterSchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(5, { message: "el campo debe tener minimo 5 caracteres" })
        .max(50, { message: "el campo debe tener minimo 50 caracteres" }),
    email: zod_1.z.string().email(),
    user: zod_1.z.string()
        .min(5, { message: "el campo debe tener minimo 5 caracteres" })
        .max(50, { message: "el campo debe tener minimo 50 caracteres" }),
    password: zod_1.z.string()
        .min(5, { message: "el campo debe tener minimo 5 caracteres" })
        .max(50, { message: "el campo debe tener minimo 50 caracteres" }),
    confirm_password: zod_1.z.string()
        .min(5, { message: "el campo debe tener minimo 5 caracteres" })
        .max(50, { message: "el campo debe tener minimo 50 caracteres" })
});
