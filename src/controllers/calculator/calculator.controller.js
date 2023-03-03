import { getSumService, postSumService } from "../../services/index.js"
import { extractAndValidate } from "../../utils/validator.js"

export const getSum = async (req, res, next) => {
    return getSumService(req, res, next)
}

export const postSum = async (req, res, next) => {
    return postSumService(req, res, next)
}