export default class Logger {

    info(msg) {

        console.info(msg);

    }

    log(msg) {
        this.info(msg);
    }

    error(msg) {
        console.error(msg);
    }

}


export function loggingMiddleware(req, res, next) {

    new Logger().info(req.url);

    next();
}