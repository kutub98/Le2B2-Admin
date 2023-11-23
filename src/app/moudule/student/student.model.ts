/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import {
  GuardiaInfo,
  StudentType,
  // StudentMethods,
  LocalGuardian,
  StudentMethods,
  // TStudentModel,
  UserName,
} from './student.interface'
import config from '../../../config'

const userSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
})

const guardinaSchema = new Schema<GuardiaInfo>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  FatherNo: {
    type: String,
    required: [true, 'Father contact number is required'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
    trim: true,
  },
  motherNo: {
    type: String,
    required: [true, 'Mother contact number is required'],
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  Name: {
    type: String,
    required: [true, 'Local guardian name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Local guardian contact number is required'],
  },
})

const StudentSchema = new Schema<StudentType, StudentMethods>(
  {
    id: {
      type: String,
      required: [true, 'Student ID is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    name: userSchema,
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['Male', 'Female', 'Other'],
        message: 'Gender must be one of: Male, Female, Other',
      },
      required: [true, 'Gender is required'],
    },
    dateOfBirth: {
      type: String,
    },
    contactNo: { type: String, required: [true, 'Contact number is required'] },
    emergencyNo: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-'],
    },
    guardianInfo: guardinaSchema,
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: [true, 'Permanent address is required'],
      trim: true,
    },
    localGuardian: localGuardianSchema,
    profileImg: {
      type: String,
    },
    isActive: { type: String, enum: ['active', 'Blocked'] },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
)

//virtuals mongoose

StudentSchema.virtual('FullName').get(function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const common: any = this.name
  return `${common.firstName}  ${common.middleName} ${common.lastName}`
})
// using of pre middleware / hooks

StudentSchema.pre('save', async function (next) {
  // console.log(this, 'we will save data');

  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcryptSaltRound),
  )
  next()
})

StudentSchema.post('save', function (doc, next) {
  doc.password = ''
  next()
})

StudentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

StudentSchema.pre('aggregate', function () {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
})
// for creating custom static

StudentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id })
  return existingUser
}

// for creating instance

// StudentSchema.methods.isUserExist = async function (id: string) {
//   const UserExist = await StudentModel.findOne({ id })
//   return UserExist
// }
export const StudentModel = model<StudentType, StudentMethods>(
  'Students',
  StudentSchema,
)
