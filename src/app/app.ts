import express, { Request, Response } from 'express'
import cors from 'cors'
import { studentRouter } from './moudule/student/student.route'
const app = express()

// application routes

app.use(express.json())
app.use(cors())

app.use('/api/v1/student', studentRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('hello world from the server')
})

export default app
