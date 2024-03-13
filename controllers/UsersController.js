import sha1 from 'sha1';
import dbClient from '../utils/db';

export default class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    const user = await dbClient.usersCollection().findOne({ email });

    if (user) {
      return res.status(400).json({ error: 'Already exist' });
    }

    const usersCollection = await dbClient.usersCollection();
    const result = await usersCollection.insertOne({
      email,
      password: sha1(password),
    });

    return res.status(201).json({ email, id: result.insertedId.toString() });
  }
}
