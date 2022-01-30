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
exports.GitController = void 0;
const git_service_1 = require("../service/git.service");
class GitController {
    constructor() {
        this.gitService = new git_service_1.GitService();
        this.auth = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.gitService.auth(req);
            return res.redirect("http://localhost:3000/dashboard");
        });
        this.getRepos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield this.gitService.getRepos(req);
            return res.status(result.status).send(result);
        });
    }
}
exports.GitController = GitController;
