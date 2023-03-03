import express from 'express'
import healthRouter from './health/health.route.js'
import calculatorRouter from './calculator/calculator.route.js'

const indexRouter = express.Router()
const api = express.Router()

// Define your routers // 
api.use(healthRouter)
api.use(calculatorRouter)

indexRouter.use('/v1', api)

export default indexRouter
