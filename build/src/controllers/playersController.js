'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersController = void 0;
const playersBo_1 = require("../bos/playersBo");
class PlayersController {
    async getPlayers(req, res, next) {
        try {
            const player = await playersBo_1.playersBo.getPlayers();
            res.status(200).json({ results: player });
        }
        catch (err) {
            next(err);
        }
    }
    async savePlayer(req, res, next) {
        try {
            const { firstName, secondSurname, position, dni, email, address, birthdate } = req.body;
            const player = await playersBo_1.playersBo.savePlayer(firstName, secondSurname, position, dni, email, address, birthdate);
            res.status(201).json({ result: player });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.playersController = new PlayersController();
