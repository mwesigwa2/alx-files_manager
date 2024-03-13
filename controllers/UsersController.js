import dbClient from '../utils/db';

export default class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }
    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }
    const user = await dbClient.usersCollection.findOne({ email });
    if (user) return res.status(400).json({ error: 'Already exist' });
    const result = await dbClient.usersCollection.insertOne({ email, password });
    res.status(201).json({ id: result.insertedId, email });
  }
}
