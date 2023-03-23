'use strict';

import { Router } from 'express';
import { customizePlayersController } from '../controllers/customizePlayersController';

const router: Router = Router();

router.get('/', customizePlayersController.getCustomizePlayers);
router.post('/', customizePlayersController.saveCustomizePlayer);

export default router;
