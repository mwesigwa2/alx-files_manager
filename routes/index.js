import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const router = (app) => {
  // Check for the status of the API database and Redis
  app.get('/status', AppController.getStatus);
  app.get('/stats', AppController.getStats);

  // Create a new user
  app.post('/users', UsersController.postNew);
};

export default router;
