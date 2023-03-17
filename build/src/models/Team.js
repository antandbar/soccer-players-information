'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connectPostgresql_1 = require("../lib/connectPostgresql");
class TeamSchema extends sequelize_1.Model {
}
TeamSchema.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstNameResp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    secondSurnameResp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dniResp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    emailResp: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    phoneResp: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
    },
    addressTeam: {
        type: sequelize_1.DataTypes.STRING,
    },
    nameTeam: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shieldTeam: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: connectPostgresql_1.db,
    modelName: 'topic',
});
exports.default = TeamSchema;
