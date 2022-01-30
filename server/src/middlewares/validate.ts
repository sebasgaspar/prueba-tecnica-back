import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validate = (req: Request, res: Response, next: NextFunction) => {

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            errors: errores.mapped()
        });
    }
    next();
}

export {
    validate
}