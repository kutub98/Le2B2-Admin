import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  Port: process.env.Port,
  DB_URL: process.env.DB_URL,
  bcryptSaltRound: process.env.bcryptSaltRound,
}
