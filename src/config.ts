import * as dotenv from 'dotenv'
import { resolve } from 'path'

const MISSING_ENV = 'Envrionemt is not set for'

const env = process.env.NODE_ENV
if (env === undefined) throw new Error(`${MISSING_ENV} NODE_ENV`)

const path = configureEnvPath(env)
dotenv.config({ path: path })

export const CONFIG = {
    ENV: process.env.NODE_ENV,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
}

validateEnvironment()

function configureEnvPath(env: string): string | undefined {
    switch (env) {
        case 'dev': {
            const path = resolve(
                __dirname,
                `./../env/${process.env.NODE_ENV}.env`
            )
            return path
        }
        case 'prod': {
            return undefined // prod deployment will have system enviroment values
        }
        default:
            throw new Error('No Envrionemt is specified')
    }
}

function validateEnvironment() {
    Object.entries(CONFIG).map((key) => {
        if (key[1] === undefined || key[1] === null)
            throw new Error(`${MISSING_ENV} ${key[0]}`) // throw error if any enviroment values are missing
    })
}
