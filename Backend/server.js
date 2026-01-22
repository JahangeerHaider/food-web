import app from './app.js';

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
  console.log(`server is runing on port ${PORT}`);
 });
