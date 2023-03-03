export const healthCheckService = (req, res) => {
    try {
        return res.json({ 'status': 'ok' })
    } catch (e) {
        console.log(`Error while healthCheck : ${JSON.stringify(e)}`)
    } finally {
        console.log('Exist from helthCheck Controller.')
    }
}