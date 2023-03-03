import express from 'express'
import bodyParser from 'body-parser';
import indexRouter from './src/routes/index.js';
import dotenv from 'dotenv'
import { middleware } from './src/middlewares/index.js';
import { PORT } from './src/constants/environments.js';

export const app = express();
dotenv.config()

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/',
    [
        middleware.logger
    ],
    indexRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message || err });
    return;
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});