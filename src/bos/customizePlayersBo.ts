'use strict';

import CustomizePlayerSchema, { CustomizePlayer } from '../models/CustomizePlayer';

class CustomizePlayersBo {
  public async getCustomizePlayers(): Promise<CustomizePlayer[]> {
    const customizePlayer: CustomizePlayer[] = await CustomizePlayerSchema.findAll();

    return customizePlayer;
  }

  public async saveCustomizePlayer(url: string): Promise<CustomizePlayer> {
    const customizePlayer: CustomizePlayer = await CustomizePlayerSchema.create({ url });
    return customizePlayer;
  }
}

export const customizePlayersBo = new CustomizePlayersBo();
