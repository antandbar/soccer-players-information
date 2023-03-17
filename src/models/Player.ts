'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Player {
  id?: number;
  firstName: string;
  secondSurname: string;
  position?: string;
  dni: string;
  email: string;
  address: string;
  birthdate: Date;
}

class PlayerSchema extends Model<Player> implements Player {
  id!: number;
  firstName!: string;
  secondSurname!: string;
  position!: string;
  dni!: string;
  email!: string;
  address!: string;
  birthdate!: Date;
}

PlayerSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondSurname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: 'player',
  },
);

export default PlayerSchema;
