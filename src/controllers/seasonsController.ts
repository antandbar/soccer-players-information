'use strict';

import { Request, Response, NextFunction } from 'express';
import { Season } from '../models/Season';
import { seasonsBo } from '../bos/seasonsBo';

class SeasonsController {
  public async getSeasons(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const season: Season[] = await seasonsBo.getSeasons();
      res.status(200).json({ results: season });
    } catch (err) {
      next(err);
    }
  }

  public async saveSeason(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { year, goals, yellowCards, redCards } = req.body;

      const season: Season = await seasonsBo.saveSeason(year, goals, yellowCards, redCards);
      res.status(201).json({ result: season });
    } catch (err) {
      next(err);
    }
  }
}

export const seasonsController = new SeasonsController();
