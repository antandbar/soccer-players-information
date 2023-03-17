'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Season {
  id?: number;
  year: number;
  goals: number;
  yellowCards: number;
  redCards: number;
}

class SeasonSchema extends Model<Season> implements Season {
  id!: number;
  year!: number;
  goals!: number;
  yellowCards!: number;
  redCards!: number;
}

SeasonSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    goals: {
      type: DataTypes.INTEGER
    },
    yellowCards: {
      type: DataTypes.INTEGER
    },
    redCards: {
      type: DataTypes.INTEGER
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: 'season',
  },
);

export default SeasonSchema;