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
exports.ClientController = void 0;
const client_service_1 = require("../service/client.service");
class ClientController {
    constructor() {
        this.clientService = new client_service_1.ClientService();
        // CREATE CLIENT 
        this.createClient = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.clientService.createClient(req);
            return res.status(result.status).send(result);
        });
        // GET CLIENT BY ID
        this.getClientByID = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.clientService.getClientByID(req);
            return res.status(result.status).send(result);
        });
        // GET CLIENT BY NUMBER AND TYPE OF IDENTIFICATION
        this.getClientByLoggin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.clientService.getClientByLoggin(req);
            return res.status(result.status).send(result);
        });
    }
}
exports.ClientController = ClientController;
