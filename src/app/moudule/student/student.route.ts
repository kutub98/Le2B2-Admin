import express from 'express'
import { studentController } from './studet.controller'

const router = express.Router()

router.get('/:id', studentController.singleStudentData)

router.post('/create-student', studentController.createStudent)
router.get('/', studentController.getAllStudent)
router.delete('/:id', studentController.deletedStudent)

export const studentRouter = router
