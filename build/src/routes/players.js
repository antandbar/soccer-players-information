'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playersController_1 = require("../controllers/playersController");
const router = (0, express_1.Router)();
router.get('/', playersController_1.playersController.getPlayers);
router.post('/', playersController_1.playersController.savePlayer);
exports.default = router;
