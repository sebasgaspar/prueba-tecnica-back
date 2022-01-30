"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitHubRepos = exports.getGitHubUser = exports.getGitHubToken = void 0;
const axios_1 = __importDefault(require("axios"));
function getGitHubToken(code) {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };
    return axios_1.default.post(`${process.env.GIT_URL}/login/oauth/access_token?client_id=${process.env.GIT_ACCESS_KEY}&client_secret=${process.env.GIT_SECRET_KEY}&code=${code}`, {}, config)
        .then(res => {
        return res.data;
    }).catch(err => {
        console.log("error");
        return null;
    });
}
exports.getGitHubToken = getGitHubToken;
function getGitHubUser(token) {
    const autho = 'Bearer '.concat(token);
    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': autho
        }
    };
    return axios_1.default.get(`${process.env.GIT_API_URL}/user`, config)
        .then(res => {
        return res.data;
    }).catch(err => {
        console.log("error", err);
        return null;
    });
}
exports.getGitHubUser = getGitHubUser;
function getGitHubRepos(user) {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    };
    return axios_1.default.get(`${process.env.GIT_API_URL}/users/${user}/repos`, config)
        .then(res => {
        return res.data;
    }).catch(err => {
        console.log("error", err);
        return null;
    });
}
exports.getGitHubRepos = getGitHubRepos;
