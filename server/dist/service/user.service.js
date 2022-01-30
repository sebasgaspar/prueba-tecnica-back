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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const responses_1 = require("../helpers/responses");
class UserService {
    constructor() {
        // CREATE USER 
        this.createUser = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new user_model_1.default(req.body);
                yield newUser.save();
                return (0, responses_1.successResponse)({
                    message: 'USER CREATE',
                    data: newUser
                });
            }
            catch (e) {
                console.log(e);
                return (0, responses_1.errorResponse)({
                    message: 'err',
                });
            }
        });
        // GET USER BY ID
        this.getUserByID = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield user_model_1.default.findById(id);
                if (user) {
                    return (0, responses_1.successResponse)({
                        message: 'USER FOUND',
                        data: user
                    });
                }
                else {
                    return (0, responses_1.failureResponse)({
                        message: 'USER NOT FOUND',
                        data: null
                    });
                }
            }
            catch (e) {
                console.log(e);
                return (0, responses_1.errorResponse)({
                    message: 'err',
                });
            }
        });
        // GET USER BY EMAIL AND PASSWORD
        this.loginUser = (req) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const user = yield user_model_1.default.findOne({ username, password });
                if (user) {
                    return (0, responses_1.successResponse)({
                        message: 'USER FOUND',
                        data: user
                    });
                }
                else {
                    return (0, responses_1.failureResponse)({
                        message: 'USER NOT FOUND',
                        data: null
                    });
                }
            }
            catch (e) {
                console.log(e);
                return (0, responses_1.errorResponse)({
                    message: 'err',
                });
            }
        });
    }
}
exports.UserService = UserService;
