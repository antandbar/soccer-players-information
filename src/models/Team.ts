'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Team {
  id?: number;
  firstNameResp?: string;
  secondSurnameResp?: string;
  dniResp?: string;
  emailResp: string;
  phoneResp?: string;
  addressTeam: string;
  nameTeam: string;
  shieldUrlTeam: string;
}

class TeamSchema extends Model<Team> implements Team {
  id!: number;
  firstNameResp!: string;
  secondSurnameResp!: string;
  dniResp!: string;
  emailResp!: string;
  phoneResp!: string;
  addressTeam!: string;
  nameTeam!: string;
  shieldUrlTeam!: string;
}

TeamSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstNameResp: {
      type: DataTypes.STRING,
    },
    secondSurnameResp: {
      type: DataTypes.STRING,
    },
    dniResp: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    emailResp: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    phoneResp: {
      type: DataTypes.STRING,
    },
    addressTeam: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nameTeam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shieldUrlTeam: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: 'team',
  },
);

export default TeamSchema;
