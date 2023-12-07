import { StaticImageData } from 'next/image'

import { ICompany } from '~/types/companies.type'

export type Skill = {
  id: string
  name: string
  website: string
  worksWithSince: string
  logo: Element | string
}

export type ProjectType = {
  id: string
  slug: string
  title: string
  thumbnail?: string
  description: string
  about: string
  challenges: string
  challengesPoints: Array<string>
  isFeature: boolean
  skills: Array<Skill>
  carousel: Array<StaticImageData>
  company: ICompany
  duration: {
    startDate: Date | string
    endDate: Date | string
  }
}
