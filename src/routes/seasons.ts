'use strict';

import { Router } from 'express';
import { seasonsController } from '../controllers/seasonsController';

const router: Router = Router();

router.get('/', seasonsController.getSeasons);
router.post('/', seasonsController.saveSeason);

export default router;
