import { UserProfile } from '../../../../../types/user'
import { Fields } from '../../../../../types/fields'

export interface ProfileFormPropTypes {
  fields: Fields
  onSubmit: (values: UserProfile) => void
  disabled: boolean
}
