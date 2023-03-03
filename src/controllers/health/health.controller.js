import { healthCheckService } from "../../services/index.js"

export const healthCheck = (req, res) => {
    return healthCheckService(req, res)
}