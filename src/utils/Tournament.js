const tournaments = require('../assets/json/tournaments.json');

export default class Tournament {
  static rand = () => {
    const shuffled = tournaments.sort(() => Math.random() - 0.5);
    return shuffled[0];
  }
}