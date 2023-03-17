'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Request {
  id?: number;
  conversation: string;
}

class RequestSchema extends Model<Request> implements Request {
  id!: number;
  conversation!: string;
}

RequestSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    conversation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    modelName: 'request',
  },
);

export default RequestSchema;