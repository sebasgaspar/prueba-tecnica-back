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
exports.ClientService = void 0;
const client_model_1 = require("../models/client.model");
const functions_1 = require("../helpers/functions");
class ClientService {
    constructor() {
        // // CREATE CLIENT 
        this.createClient = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield client_model_1.client.create(req.body);
                if (result) {
                    return new functions_1.ResponseInterface({
                        ok: true,
                        status: 200,
                        message: 'CLIENT CREATE',
                        data: result
                    });
                }
                else {
                    return new functions_1.ResponseInterface({
                        ok: false,
                        status: 400,
                        message: 'ClIENT NOT CREATE',
                        data: null
                    });
                }
            }
            catch (e) {
                console.log(e);
                return new functions_1.ResponseInterface({
                    ok: false,
                    status: 500,
                    message: 'err',
                    data: null
                });
            }
        });
        // // GET CLIENT BY ID
        this.getClientByID = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield client_model_1.client.getById(Number.parseInt(id));
                if (result) {
                    return new functions_1.ResponseInterface({
                        ok: true,
                        status: 200,
                        message: 'CLIENT FOUND',
                        data: result
                    });
                }
                else {
                    return new functions_1.ResponseInterface({
                        ok: false,
                        status: 400,
                        message: 'CLIENT NOT FOUND',
                        data: null
                    });
                }
            }
            catch (e) {
                console.log(e);
                return new functions_1.ResponseInterface({
                    ok: false,
                    status: 500,
                    message: 'err',
                    data: null
                });
            }
        });
        // GET CLIENT BY EMAIL AND PASSWORD
        this.getClientByLoggin = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const result = yield client_model_1.client.getByLoggin(username, password);
                if (result) {
                    return new functions_1.ResponseInterface({
                        ok: true,
                        status: 200,
                        message: 'CLIENT FOUND',
                        data: result
                    });
                }
                else {
                    return new functions_1.ResponseInterface({
                        ok: false,
                        status: 400,
                        message: 'CLIENT NOT FOUND',
                        data: null
                    });
                }
            }
            catch (e) {
                console.log(e);
                return new functions_1.ResponseInterface({
                    ok: false,
                    status: 500,
                    message: 'err',
                    data: null
                });
            }
        });
    }
}
exports.ClientService = ClientService;
