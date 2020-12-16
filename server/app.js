require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const models = require('./models');
const passportConfig = require('./passport');
const apiRouter = require('./routes');
const handleErrors = require('./middlewares/handleErrors');
const { NotFound } = require('./utils/errors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-useragent').express());

models.sequelize
  .sync({ logging: false })
  .then(() => {
    console.log('DB 연결 성공');
  })
  .catch((err) => {
    console.log(err);
    console.log('DB연결 실패');
    process.exit();
  });

app.use(passport.initialize());
passportConfig();

app.use('/api', cors(), apiRouter);

app.use((req, res, next) => {
  throw new NotFound('API URL is invalid');
});

app.use(handleErrors);

module.exports = app;
