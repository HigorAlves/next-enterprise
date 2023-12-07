/* eslint-disable no-unused-vars */

export enum LocationType {
  REMOTE = 'Remote',
  HYBRID = 'Hybrid',
}

export enum EmploymentType {
  FULLTIME = 'Full-time',
  CONTRACTOR = 'Contractor',
  CONSULTANT = 'Consultant',
}

export type CompanyName =
  | 'arctouch'
  | 'datum'
  | 'doare'
  | 'ask'
  | '123milhas'
  | 'zipdev'
  | 'notchteam'
  | 'righbalance'
  | 'xteam'
  | 'toroinvestimentos'
  | 'takeblip'
  | 'monetus'
  | 'natahouse'
  | 'novacdevs'
  | 'perallis'
  | 'fiocruz'
  | 'edulivre'
  | 'tradersclub'
  | 'nkey'
  | 'unesco'
  | 'ufsj'

export interface ICompany {
  name: string
  job: string
  website: string
  icon: string
  show: boolean
  description: string
  rating: number
  address: {
    city: string
    country: string
  }
  duration: {
    startDate: string
    endDate: string
  }
  contract: {
    locationType: LocationType
    employmentType: EmploymentType
  }
}
