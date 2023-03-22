import PlayerSchema  from './Player';
import TeamSchema from './Team';
import SeasonSchema from './Season';
import RequestSchema from './Request';
import CustomizePlayerSchema from './CustomizePlayer';


class Associations {
    public relations () {

        //Relación n a n
        PlayerSchema.hasMany(SeasonSchema, {foreignKey: 'playerId' });
        SeasonSchema.belongsTo(PlayerSchema, {foreignKey: 'playerId' });

        TeamSchema.hasMany(SeasonSchema, {foreignKey: 'teamId' });
        SeasonSchema.belongsTo(TeamSchema, {foreignKey: 'teamId' });


        //Relación n a n
        PlayerSchema.hasMany(RequestSchema, {foreignKey: 'playerId' });
        RequestSchema.belongsTo(PlayerSchema, {foreignKey: 'playerId' });

        TeamSchema.hasMany(RequestSchema, {foreignKey: 'teamId' });
        RequestSchema.belongsTo(TeamSchema, {foreignKey: 'teamId' });

        //Relación n a n
        PlayerSchema.hasMany(CustomizePlayerSchema, {foreignKey: 'playerId' });
        CustomizePlayerSchema.belongsTo(PlayerSchema, {foreignKey: 'playerId' });

        TeamSchema.hasMany(CustomizePlayerSchema, {foreignKey: 'teamId' });
        CustomizePlayerSchema.belongsTo(TeamSchema, {foreignKey: 'teamId' });


    }

}

export default new Associations();

