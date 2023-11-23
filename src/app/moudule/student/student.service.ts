import { StudentType } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (studentData: StudentType) => {
  if (await StudentModel.isUserExist(studentData.id)) {
    throw new Error('User Already exists')
  }
  const result = StudentModel.create(studentData) // static

  return result

  // for creating instance method
  // const student = new StudentModel(studentData) // instance method
  // const existingUser = student.isUserExists
  // if (await existingUser(studentData.id)) {
  //   throw new Error('User already exist')
  // }
  // const result = await student.save()
  // return result
}

// get all student
const getAllStudentFromDB = async () => {
  const result = StudentModel.find()
  return result
}

const getSingleStudentFromDb = async (id: string) => {
  // const result = await StudentModel.findOne({ id })
  const result = await StudentModel.aggregate([
    {$match: {id: id}}
  ])
  return result
}
const deletedStudentFromDb = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true })
  return result
}

export const StudentService = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDb,
  deletedStudentFromDb,
}
// ========================================================
