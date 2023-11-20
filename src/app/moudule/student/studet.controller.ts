import { Request, Response } from 'express'
import { StudentService } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const { studentData } = req.body
    const result = await StudentService.createStudentIntoDB(studentData)

    res.status(200).json({
      success: true,
      message: 'Create Student Successfully',
      data: result,
    })
    return result
  } catch (err) {
    console.log(err)
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
  } catch (err) {
    console.log(console.error)
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
  } catch (err) {
    console.log(err)
  }
}
export const studentController = {
  createStudent,
  getAllStudent,
  singleStudentData,
}
