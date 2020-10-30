import { Router } from 'express';

import ensureAutheticated from '@modules/users/infra/middlewares/ensureAutheticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();
profileRouter.use(ensureAutheticated);

profileRouter.put('/', profileController.update);
profileRouter.get('/', profileController.show);

export default profileRouter;
