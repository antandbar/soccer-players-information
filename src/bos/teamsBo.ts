'use strict';

import TeamSchema, { Team } from '../models/Team';

class TeamsBo {
  public async getTeams(): Promise<Team[]> {
    const teams: Team[] = await TeamSchema.findAll();

    return teams;
  }

  public async saveTeam(firstNameResp: string, secondSurnameResp: string, dniResp: string, emailResp: string, phoneResp: string, addressTeam: string, nameTeam: string, shieldUrlTeam:string ): Promise<Team> {
    const player: Team = await TeamSchema.create({ firstNameResp, secondSurnameResp, dniResp, emailResp, phoneResp, addressTeam, nameTeam, shieldUrlTeam });
    return player;
  }
}

export const teamsBo = new TeamsBo();
