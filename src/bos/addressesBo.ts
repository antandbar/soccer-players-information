'use strict';

import AdressSchema, { Address } from '../models/Address';

class AddressesBo {
  public async getAddresses(): Promise<Address[]> {
    const players: Address[] = await AdressSchema.findAll();

    return players;
  }

  public async saveAddress(street: string, city: string): Promise<Address> {
    const address: Address = await AdressSchema.create({ street, city });
    return address;
  }
}

export const addressesBo = new AddressesBo();
