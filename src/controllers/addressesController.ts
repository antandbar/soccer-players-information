'use strict';

import { Request, Response, NextFunction } from 'express';
import { Address } from '../models/Address';
import { addressesBo } from '../bos/addressesBo';

class AddressesController {
  public async getAddresses(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const address: Address[] = await addressesBo.getAddresses();
      res.status(200).json({ results: address });
    } catch (err) {
      next(err);
    }
  }

  public async saveAddress(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { street, city  } = req.body;

      const address: Address = await addressesBo.saveAddress(street, city);
      res.status(201).json({ result: address });
    } catch (err) {
      next(err);
    }
  }
}

export const addressesController = new AddressesController();
