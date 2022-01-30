/*
    /
*/
import { Router } from "express";
import { GitController } from '../controllers/git.controller';

const routes = Router();

const gitController = new GitController();

routes.get('/auth/:id', gitController.auth);
routes.get('/repos/:id', gitController.getRepos);


export default routes;