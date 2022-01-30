import { Request } from 'express';
import User from '../models/user.model';
import { successResponse, failureResponse, errorResponse } from '../helpers/responses';


export class UserService {

    // CREATE USER 
    createUser = async (req: Request) => {
        try {
            const newUser = new User(req.body);
            await newUser.save();
            return successResponse({
                message: 'USER CREATE',
                data: newUser
            });
        } catch (e) {
            console.log(e);
            return errorResponse({
                message: 'err',
            });
        }
    }

    // GET USER BY ID
    getUserByID = async (req: Request) => {
        try {
            const { id } = req.params
            const user = await User.findById(id);
            if (user) {
                return successResponse({
                    message: 'USER FOUND',
                    data: user
                });
            } else {
                return failureResponse({
                    message: 'USER NOT FOUND',
                    data: null
                })
            }
        }
        catch (e) {
            console.log(e);
            return errorResponse({
                message: 'err',
            });
        }
    }

    // GET USER BY EMAIL AND PASSWORD
    loginUser = async (req) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username, password });
            if (user) {
                return successResponse({
                    message: 'USER FOUND',
                    data: user
                });
            } else {
                return failureResponse({
                    message: 'USER NOT FOUND',
                    data: null
                })
            }
        }
        catch (e) {
            console.log(e);
            return errorResponse({
                message: 'err',
            });
        }
    }
}