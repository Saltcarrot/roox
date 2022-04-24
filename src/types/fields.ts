import { UserProfile } from './user'

export type Fields = {
  [key in keyof UserProfile]: {
    label: string
    value: string
    type: string
  }
}
