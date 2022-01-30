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
exports.client = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const fields = {
    id: false,
    name: true,
    lastName: true,
    email: true,
    username: false,
    password: true
};
class Client {
    constructor() {
        this.create = (clientData) => __awaiter(this, void 0, void 0, function* () {
            return prisma.client.create({
                data: Object.assign({}, clientData),
                select: fields
            });
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            return prisma.client.findUnique({
                where: {
                    id: id,
                },
                select: fields
            });
        });
        this.getByLoggin = (username, password) => __awaiter(this, void 0, void 0, function* () {
            return prisma.client.findFirst({
                where: {
                    username,
                    password
                },
                select: fields
            });
        });
    }
}
const client = new Client();
exports.client = client;
