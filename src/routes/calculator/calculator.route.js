import express from 'express'
import { postSum, getSum } from '../../controllers/index.js'

const sumRouter = express.Router()

sumRouter.post('/sum', postSum)
sumRouter.get('/sum', getSum)

export default sumRouter