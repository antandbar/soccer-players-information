'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class SeasonSchema extends sequelize_1.Model {
}
SeasonSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    goals: {
        type: sequelize_1.DataTypes.INTEGER
    },
    yellowCards: {
        type: sequelize_1.DataTypes.INTEGER
    },
    redCards: {
        type: sequelize_1.DataTypes.INTEGER
    },
}, {
    timestamps: true,
    sequelize: connectPostgresql_1.db,
    modelName: 'post',
});
exports.default = SeasonSchema;
