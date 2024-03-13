import AppController from '../controllers/AppController';

const router = (api) => {
  api.get('/status', AppController.getStatus);
  api.get('/stats', AppController.getStats);
};

export default router;
