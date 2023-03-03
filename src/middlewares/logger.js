export const loggerFunc = (req, res) => {
    console.log('Hostname: ' + req?.headers?.host)
    console.log('URL: ' + req.originalUrl)
}