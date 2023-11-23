import { Model } from 'mongoose'

type Gender = 'Male' | 'Female' | 'Other'

type BloodGroupEnum = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

export type GuardiaInfo = {
  fatherName: string
  fatherOccupation: string
  FatherNo: string
  motherName: string
  motherOccupation: string
  motherNo: string
}

export type LocalGuardian = {
  Name: string
  occupation: string
  contactNo: string
}

export type UserName = {
  firstName: string
  middleName?: string
  lastName: string
}

export type StudentType = {
  id: string
  password: string
  name: UserName
  email: string
  gender: Gender
  dateOfBirth: string
  contactNo: string
  emergencyNo: string
  bloodGroup: BloodGroupEnum
  guardianInfo: GuardiaInfo
  presentAddress: string
  permanentAddress: string
  localGuardian: LocalGuardian
  profileImg?: string
  isActive: 'active' | 'Blocked'
  isDeleted: boolean
}

// for createing custom Static

export interface StudentMethods extends Model<StudentType> {
  isUserExist(id: string): Promise<StudentType | null>
}
// =================================================================
// for creating instance

// export interface StudentMethods {
//   isUserExists(id: string): Promise<StudentType | null> // Fix method name to match the implementation
// }

// export type TStudentModel = Model<
//   StudentType,
//   Record<string, never>,
//   StudentMethods
// >
