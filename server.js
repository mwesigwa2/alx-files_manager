import express from 'express';
import middleWare from './libs/middleWare';
import router from './routes/index';

const app = express();
const PORT = 3000;

middleWare(app);
router(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
