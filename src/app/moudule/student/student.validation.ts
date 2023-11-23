import { z } from 'zod'

const userNameSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
})

const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  FatherNo: z.string().min(11).max(11),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherNo: z.string().min(11).max(11),
})

const localGuardianSchema = z.object({
  Name: z.string(),
  occupation: z.string(),
  contactNo: z.string().min(11).max(11),
})

export const studentValidationSchema = z.object({
  id: z.string(),
  password: z.string().min(8).max(20),
  name: userNameSchema,
  email: z.string().email(),
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string(),
  contactNo: z.string().min(11).max(11),
  emergencyNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),

  guardianInfo: guardianSchema,
  presentAddress: z.string(),
  permanentAddress: z.string(),
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'Blocked']).default('active'),
  isDeleted: z.boolean(),
})

export default studentValidationSchema
