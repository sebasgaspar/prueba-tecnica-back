"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
    /
*/
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_1 = require("../middlewares/validate");
const user_controller_1 = require("../controllers/user.controller");
const routes = (0, express_1.Router)();
const userController = new user_controller_1.UserController();
const validateData = [
    (0, express_validator_1.check)('name', 'name is required').not().isEmpty(),
    (0, express_validator_1.check)('lastname', 'lastname is required').not().isEmpty(),
    (0, express_validator_1.check)('email', 'email is required').isEmail(),
    (0, express_validator_1.check)('username', ' username is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'password is required').not().isEmpty(),
    validate_1.validate
];
routes.post('/', validateData, userController.createUser);
routes.get('/id/:id', userController.getUserByID);
routes.post('/login', [
    (0, express_validator_1.check)('username', ' username is required').not().isEmpty(),
    (0, express_validator_1.check)('password', 'password is required').not().isEmpty(),
    validate_1.validate
], userController.loginUser);
exports.default = routes;
