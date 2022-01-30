"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    /
*/
const express_1 = require("express");
const git_controller_1 = require("../controllers/git.controller");
const routes = (0, express_1.Router)();
const gitController = new git_controller_1.GitController();
routes.get('/auth/:id', gitController.auth);
routes.get('/repos/:id', gitController.getRepos);
exports.default = routes;
