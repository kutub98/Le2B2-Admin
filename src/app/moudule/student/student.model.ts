import { Schema, model } from 'mongoose'
import {
  GuardiaInfo,
  IStudent,
  LocalGuardian,
  UserName,
} from './student.interface'

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const guardinaSchema = new Schema<GuardiaInfo>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccepassion: {
    type: String,
    required: true,
  },
  FatherNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccepassion: {
    type: String,
    required: true,
  },
  motherNo: {
    type: String,
    required: true,
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  Name: {
    type: String,
    required: true,
  },
  Occepassion: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
})

const StudentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: userSchema,
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyNo: {
    type: String,
    required: true,
  },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
  guardianNo: guardinaSchema,
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  localGuardian: localGuardianSchema,
  isActive: ['Blocked', 'active'],
})

export const StudentModel = model<IStudent>('Students', StudentSchema)
