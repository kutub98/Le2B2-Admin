import { IStudent } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: IStudent) => {
  const result = StudentModel.create(student)
  return result
}

// get all student
const getAllStudentFromDB = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDb,
}
