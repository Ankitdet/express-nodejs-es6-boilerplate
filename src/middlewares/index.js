import { loggerFunc } from "./logger.js"

export const middleware = {
    logger: function async(req, res, next) {
        loggerFunc(req, res)
        next()
    }
}