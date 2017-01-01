import SwaggerExpress from 'swagger-express-mw';
import express from 'express';

var app = express();
module.exports = app; // for testing

var config = {
    appRoot: __dirname, // required config
    swaggerFile: __dirname + '/api/swagger/swagger.yaml',
    configDir: __dirname + '/config'
};

app.use(function (req, res, next) {
    console.log(req.url);
    next()
});

SwaggerExpress.create(config, function (err, swaggerExpress) {

    if (err) {
        throw err;
    }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port, () => {
        console.log('starting ... running on port 10010. NODE_ENV = ', process.env.NODE_ENV);
    });
});

export default app;