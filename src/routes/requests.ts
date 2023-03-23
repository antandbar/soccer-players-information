'use strict';

import { Router } from 'express';
import { requestsController } from '../controllers/requestsController';

const router: Router = Router();

router.get('/', requestsController.getRequests);
router.post('/', requestsController.saveRequest);

export default router;
