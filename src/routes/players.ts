'use strict';

import { Router } from 'express';
import { playersController } from '../controllers/playersController';

const router: Router = Router();

router.get('/', playersController.getPlayers);
router.post('/', playersController.savePlayer);

export default router;
