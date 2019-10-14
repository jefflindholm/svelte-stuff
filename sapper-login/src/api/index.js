import express from 'express';

const route = express.Router();

router.use((req, res, next) => {
  console.log(req.method, req.originalUrl, req.body);
  next();
});

router.post('/login', (req, res) => {

});
