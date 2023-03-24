'use strict';

import { Router } from 'express';
import { teamsController } from '../controllers/teamsController';

const router: Router = Router();

router.get('/', teamsController.getTeams);
router.post('/', teamsController.saveTeam);

export default router;
