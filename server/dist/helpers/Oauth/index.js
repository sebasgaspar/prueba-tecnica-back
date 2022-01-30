"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitHubAuthUrl = void 0;
const axios_1 = __importDefault(require("axios"));
function getGitHubAuthUrl(data) {
    axios_1.default.get(`${process.env.GIT_URL}/login/oauth/authorize?client_id=${process.env.GIT_CLIENT_ID}&login=sebasgaspar14@gmail.com`)
        .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
}
exports.getGitHubAuthUrl = getGitHubAuthUrl;
