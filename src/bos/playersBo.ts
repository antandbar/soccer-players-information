'use strict';

import PlayerSchema, { Player } from '../models/Player';

class PlayersBo {
  public async getPlayers(): Promise<Player[]> {
    const players: Player[] = await PlayerSchema.findAll();

    return players;
  }

  public async savePlayer(firstName: string, secondSurname: string, position: string, dni: string, email: string, address: string, birthdate: Date): Promise<Player> {
    const player: Player = await PlayerSchema.create({ firstName, secondSurname, position, dni, email, address, birthdate });
    return player;
  }
}

export const playersBo = new PlayersBo();
