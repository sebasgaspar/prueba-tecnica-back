import { Request } from 'express';
import User from '../models/user.model';
import { getGitHubToken, getGitHubUser, getGitHubRepos } from '../helpers/GitHub';
import { errorResponse, failureResponse, successResponse } from '../helpers/responses';
import { UserService } from './user.service';
import { ResponseInterface } from '../interfaces';


export class GitService {

    // AUTH GITHUB
    auth = async (req: Request) => {
        const { code } = req.query;
        const { id } = req.params;
        try {
            const result = await getGitHubToken(code);
            if (result.access_token) {

                User.findByIdAndUpdate(id, { access_token: result.access_token }, { new: true }, (err, user) => {
                    if (err) console.log(err);
                    this.getUserGit(id, result.access_token);
                })
            } else {
                return failureResponse({
                    message: "Failed to authenticate",
                    data: null
                })
            }
        } catch (error) {
            console.log(error);
            return errorResponse({
                message: "Error al autenticar con GitHub",
            })
        }
    }
    getUserGit = async (id, token) => {
        try {
            const result = await getGitHubUser(token);
            if (result) {
                await User.findByIdAndUpdate(id, { gitUser: result.login }, { new: true }, (err, user) => {
                    if (err) console.log(err);
                    return successResponse({
                        message: "User updated",
                        data: user
                    })
                })
            } else {
                return failureResponse({
                    message: "Failed to authenticate",
                    data: null
                })
            }
        } catch {

        }
    }

    getRepos = async (req: Request) => {
        const userService = new UserService()
        try {
            const user: ResponseInterface = await userService.getUserByID(req);
            if (user.status == 200) {
                const result = await getGitHubRepos(user.data.gitUser);
                if(result){
                    return successResponse({
                        message: "Repositorios encontrados",
                        data: result
                    })
                }else{
                    return failureResponse({
                        message: "No se encontraron repositorios",
                        data: null
                    })
                }
            } else {
                return user;
            }


        } catch (e) {
            console.log(e);
        }
    }
}