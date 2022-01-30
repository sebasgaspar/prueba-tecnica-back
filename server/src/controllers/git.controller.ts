import { Response, Request } from 'express';
import { ResponseInterface } from '../interfaces';
import { GitService } from '../service/git.service';

export class GitController {

    gitService = new GitService();

    auth = async (req: Request, res: Response) => {
        await this.gitService.auth(req);
        return res.redirect("http://localhost:3000/dashboard");
    }
    getRepos = async (req: Request, res: Response) => {
        const result: ResponseInterface = await this.gitService.getRepos(req);
        return res.status(result.status).send(result)
    }
}