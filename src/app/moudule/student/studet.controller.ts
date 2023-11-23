/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { StudentService } from './student.service'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { studentData } = req.body
    const ZodParseData = studentValidationSchema.parse(studentData)
    const result = await StudentService.createStudentIntoDB(ZodParseData)
    res.status(200).json({
      success: true,
      message: 'Create Student Successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    })
  }
}

// get all student function

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.getAllStudentFromDB()
    res.status(200).json({
      success: true,
      message: 'Students Data retrived Successfully',
      allStudent: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    })
  }
}

// get single data of student  function

const singleStudentData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await StudentService.getSingleStudentFromDb(id)

    res.status(200).json({
      success: true,
      message: 'Successfully retrived single Student Data',
      singleStudentData: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: 'Something went wrong!' || err.message,
      error: err,
    })
  }
}

const deletedStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await StudentService.deletedStudentFromDb(id)
    res.status(200).json({
      success: true,
      message: 'Successfully deleted this student',
      data: result,
    })
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: err.message || 'Something went wrong',
    })
  }
}
export const studentController = {
  createStudent,
  getAllStudent,
  singleStudentData,
  deletedStudent,
}
