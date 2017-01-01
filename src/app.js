import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';
import appConfig from './config/appConfig';
import {loggingMiddleware} from './services/logger.js';

// Configure mongoose library to use bluebird promises
mongoose.Promise = Promise;

const app = express();
const config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.yaml',
    configDir: __dirname + '/config'
};

// Logging middleware

app.use(loggingMiddleware);


SwaggerExpress.create(config, (err, swaggerExpress) => {

    if (err) {
        throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    // Open mongoose connection
    mongoose.connect(appConfig.mongoConnection, () => {

        console.log('connection to database is ready', appConfig.mongoConnection);

    });


    // Start!
    app.listen(appConfig.applicationPort, () => {

        console.log(`starting ... running on port ${appConfig.applicationPort}. NODE_ENV = ${process.env.NODE_ENV}`);

    });
});


module.exports = app; // for testing