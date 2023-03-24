'use strict';

import { Request, Response, NextFunction } from 'express';
import { Team } from '../models/Team';
import { teamsBo } from '../bos/teamsBo';

class TeamsController {
  public async getTeams(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const team: Team[] = await teamsBo.getTeams();
      res.status(200).json({ results: team });
    } catch (err) {
      next(err);
    }
  }

  public async saveTeam(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { firstNameResp, secondSurnameResp, dniResp, emailResp, phoneResp, addressTeam, nameTeam, shieldUrlTeam } = req.body;

      const team: Team = await teamsBo.saveTeam(firstNameResp, secondSurnameResp, dniResp, emailResp, phoneResp, addressTeam, nameTeam, shieldUrlTeam);
      res.status(201).json({ result: team });
    } catch (err) {
      next(err);
    }
  }
}

export const teamsController = new TeamsController();
