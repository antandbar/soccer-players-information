'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface CustomizePlayer {
  id?: number;
  url: string;
}

class CustomizePlayerSchema extends Model<CustomizePlayer> implements CustomizePlayer {
  id!: number;
  url!: string;
}

CustomizePlayerSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: 'customizePlayer',
  },
);

export default CustomizePlayerSchema;