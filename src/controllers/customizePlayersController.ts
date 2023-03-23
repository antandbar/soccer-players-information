'use strict';

import { Request, Response, NextFunction } from 'express';
import { CustomizePlayer } from '../models/CustomizePlayer';
import { customizePlayersBo } from '../bos/customizePlayersBo';

class CustomizePlayersController {
  public async getCustomizePlayers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const customizePlayers: CustomizePlayer[] = await customizePlayersBo.getCustomizePlayers();
      res.status(200).json({ results: customizePlayers });
    } catch (err) {
      next(err);
    }
  }

  public async saveCustomizePlayer(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { url } = req.body;

      const customizePlayer: CustomizePlayer = await customizePlayersBo.saveCustomizePlayer(url);
      res.status(201).json({ result: customizePlayer });
    } catch (err) {
      next(err);
    }
  }
}

export const customizePlayersController = new CustomizePlayersController();
