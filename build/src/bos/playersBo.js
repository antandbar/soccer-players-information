'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersBo = void 0;
const Player_1 = __importDefault(require("../models/Player"));
class PlayersBo {
    async getPlayers() {
        const players = await Player_1.default.findAll();
        return players;
    }
    async savePlayer(firstName, secondSurname, position, dni, email, address, birthdate) {
        const player = await Player_1.default.create({ firstName, secondSurname, position, dni, email, address, birthdate });
        return player;
    }
}
exports.playersBo = new PlayersBo();
