import { extractAndValidate } from "../../utils/validator.js"

export const getSumService = (req, res, next) => {
    try {
        const { num1, num2 } = extractAndValidate(req.query, req, res)
        if (!num1 || !num2) return
        const result = Number(num1) + Number(num2)
        return res.status(200).send({ result })
    } catch (err) {
        console.error(`Error while calling getSum`, err.message);
        next(err);
    }
}

export const postSumService = (req, res, next) => {
    try {
        const { num1, num2 } = extractAndValidate(req.body, req, res)
        if (!num1 || !num2) return
        const result = Number(num1) + Number(num2)
        return res.status(200).send({ result })
    } catch (err) {
        console.error(`Error while calling postSum`, err.message);
        next(err);
    }
}