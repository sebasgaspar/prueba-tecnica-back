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
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService();
        // CREATE USER 
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.createUser(req);
            return res.status(result.status).send(result);
        });
        // GET USER BY ID
        this.getUserByID = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.getUserByID(req);
            return res.status(result.status).send(result);
        });
        // LOGIN USER
        this.loginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userService.loginUser(req);
            return res.status(result.status).send(result);
        });
    }
}
exports.UserController = UserController;
