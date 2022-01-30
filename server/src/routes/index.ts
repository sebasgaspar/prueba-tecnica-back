import express from 'express';

import UseRoutes from './user.routes';
import GitRoutes from './git.routes';

const routerMain = express.Router();

routerMain.use('/api/user', UseRoutes);
routerMain.use('/api/github', GitRoutes);

export default routerMain;
