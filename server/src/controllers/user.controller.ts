import { Response,Request } from 'express';
import { ResponseInterface } from '../interfaces';
import { UserService } from '../service/user.service';

export class UserController {

    userService = new UserService()

    // CREATE USER 
    createUser = async (req: Request, res: Response) => {
        const result: ResponseInterface = await this.userService.createUser(req);
        return res.status(result.status).send(result)
    }

    // GET USER BY ID
    getUserByID = async (req: Request, res: Response) => {
        const result: ResponseInterface = await this.userService.getUserByID(req);
        return res.status(result.status).send(result)
    }

    // LOGIN USER
    loginUser = async (req: Request, res: Response) => {
        const result: ResponseInterface = await this.userService.loginUser(req);
        return res.status(result.status).send(result)
    }
}
