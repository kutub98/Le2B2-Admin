type Gender = 'Male' | 'Female' | 'Other'
type BlodeGroup = 'A+' | 'B+' | 'A-' | 'B-' | 'O-' | 'O+'

export type GuardiaInfo = {
  fatherName: string
  fatherOccepassion: string
  FatherNo: string
  motherName: string
  motherOccepassion: string
  motherNo: string
}
export type LocalGuardian = {
  Name: string
  Occepassion: string
  contactNo: string
}

export type UserName = {
  firstName: string
  middleName: string
  lastName: string
}

export type IStudent = {
  id: string
  name: UserName
  email: string
  gender: Gender
  contactNo: string
  emergencyNo: string
  bloodGroup: BlodeGroup
  guardianNo: GuardiaInfo
  presentAddress: string
  permanentAddress: string
  localGuardian: LocalGuardian
  isActive: 'active' | 'Blocked'
}
