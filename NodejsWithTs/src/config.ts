
import env from 'dotenv'
env.config()


const config={
    env: process.env.NODE_ENV || "development",
    port: Number(process.env.PORT) || 3000,
    debug:process.env.APP_DEBUG === "true",
    secretKey:process.env.SECRET_KEY || "",
    logLevel:process.env.LOG_LEVEL || "info"
}

export default config