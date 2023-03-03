export const extractAndValidate = (obj, req, res) => {
    const { num1, num2 } = obj
    if (!num1 || !num2) {
        return res.status(400).send({ 'error': 'Bad request' })
    }
    if (!!isNaN(num1)) {
        return res.status(400).send({ 'error': 'num1 must be a number' })
    }
    if (!!isNaN(num2)) {
        return res.status(400).send({ 'error': 'num2 must be a number' })
    }
    return { num1, num2 }
}