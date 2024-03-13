const { redisClient } = require('../utils/redis');
const { dbClient } = require('../utils/db');

export default class AppController {
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).send(status);
  }

  static async getStats(req, res) {
    const nbusers = await dbClient.nbUsers();
    const nbfiles = await dbClient.nbFiles();
    return res.status(200).json({ users: nbusers, files: nbfiles });
  }
}
