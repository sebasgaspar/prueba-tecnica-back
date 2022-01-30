/*
    /
*/
import { Router } from "express";
import { check } from 'express-validator';
import { validate } from "../middlewares/validate";
import { UserController } from '../controllers/user.controller';

const routes = Router();
const userController = new UserController()

const validateData = [
    check('name', 'name is required').not().isEmpty(),
    check('lastname', 'lastname is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('username', ' username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    validate
];

routes.post('/', validateData, userController.createUser);

routes.get('/id/:id', userController.getUserByID);

routes.post('/login', [
    check('username', ' username is required').not().isEmpty(),
    check('password', 'password is required').not().isEmpty(),
    validate
], userController.loginUser);


export default routes;