'use strict';

import { Request, Response, NextFunction } from 'express';
import { Player } from '../models/Player';
import { playersBo } from '../bos/playersBo';

class PlayersController {
  public async getPlayers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const player: Player[] = await playersBo.getPlayers();
      res.status(200).json({ results: player });
    } catch (err) {
      next(err);
    }
  }

  public async savePlayer(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { firstName, secondSurname, position, dni, email, address, birthdate } = req.body;

      const player: Player = await playersBo.savePlayer(firstName, secondSurname, position, dni, email, address, birthdate);
      res.status(201).json({ result: player });
    } catch (err) {
      next(err);
    }
  }
}

export const playersController = new PlayersController();
