'use strict';

import { Request, Response, NextFunction } from 'express';
import { Request as RequestMod } from '../models/Request';
import { requestsBo } from '../bos/requestsBo';

class RequestsController {
  public async getRequests(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const request: RequestMod[] = await requestsBo.getRequests();
      res.status(200).json({ results: request });
    } catch (err) {
      next(err);
    }
  }

  public async saveRequest(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { conversation } = req.body;

      const request: RequestMod = await requestsBo.saveRequest(conversation);
      res.status(201).json({ result: request });
    } catch (err) {
      next(err);
    }
  }
}

export const requestsController = new RequestsController();
