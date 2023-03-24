'use strict';

import SeasonSchema, { Season } from '../models/Season';

class SeasonsBo {
  public async getSeasons(): Promise<Season[]> {
    const seasons: Season[] = await SeasonSchema.findAll();

    return seasons;
  }

  public async saveSeason(year: number, goals: number, yellowCards: number, redCards: number): Promise<Season> {
    const season: Season = await SeasonSchema.create({ year, goals, yellowCards, redCards });
    return season;
  }
}

export const seasonsBo = new SeasonsBo();
