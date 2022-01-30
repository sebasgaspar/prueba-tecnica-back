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
exports.GitService = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const GitHub_1 = require("../helpers/GitHub");
const responses_1 = require("../helpers/responses");
const user_service_1 = require("./user.service");
class GitService {
    constructor() {
        // AUTH GITHUB
        this.auth = (req) => __awaiter(this, void 0, void 0, function* () {
            const { code } = req.query;
            const { id } = req.params;
            try {
                const result = yield (0, GitHub_1.getGitHubToken)(code);
                if (result.access_token) {
                    user_model_1.default.findByIdAndUpdate(id, { access_token: result.access_token }, { new: true }, (err, user) => {
                        if (err)
                            console.log(err);
                        this.getUserGit(id, result.access_token);
                    });
                }
                else {
                    return (0, responses_1.failureResponse)({
                        message: "Failed to authenticate",
                        data: null
                    });
                }
            }
            catch (error) {
                console.log(error);
                return (0, responses_1.errorResponse)({
                    message: "Error al autenticar con GitHub",
                });
            }
        });
        this.getUserGit = (id, token) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, GitHub_1.getGitHubUser)(token);
                if (result) {
                    yield user_model_1.default.findByIdAndUpdate(id, { gitUser: result.login }, { new: true }, (err, user) => {
                        if (err)
                            console.log(err);
                        return (0, responses_1.successResponse)({
                            message: "User updated",
                            data: user
                        });
                    });
                }
                else {
                    return (0, responses_1.failureResponse)({
                        message: "Failed to authenticate",
                        data: null
                    });
                }
            }
            catch (_a) {
            }
        });
        this.getRepos = (req) => __awaiter(this, void 0, void 0, function* () {
            const userService = new user_service_1.UserService();
            try {
                const user = yield userService.getUserByID(req);
                if (user.status == 200) {
                    const result = yield (0, GitHub_1.getGitHubRepos)(user.data.gitUser);
                    if (result) {
                        return (0, responses_1.successResponse)({
                            message: "Repositorios encontrados",
                            data: result
                        });
                    }
                    else {
                        return (0, responses_1.failureResponse)({
                            message: "No se encontraron repositorios",
                            data: null
                        });
                    }
                }
                else {
                    return user;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.GitService = GitService;
