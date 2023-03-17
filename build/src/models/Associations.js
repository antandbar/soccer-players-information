"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = __importDefault(require("./Player"));
const Team_1 = __importDefault(require("./Team"));
const Season_1 = __importDefault(require("./Season"));
class Associations {
    relations() {
        Player_1.default.hasMany(Season_1.default, { foreignKey: 'playerId' });
        Season_1.default.belongsTo(Player_1.default, { foreignKey: 'playerId' });
        Team_1.default.hasMany(Season_1.default, { foreignKey: 'seasonId' });
        Season_1.default.belongsTo(Team_1.default, { foreignKey: 'seasonId' });
    }
}
exports.default = new Associations();
