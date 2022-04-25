import { UserProfile } from '../../../../../types/user'
import { Fields } from '../../../../../types/fields'
import { validationSchema } from '../../../../../utils/validationSchema'

export interface ProfileFormPropTypes {
  fields: Fields
  validationSchema: typeof validationSchema
  onSubmit: (values: UserProfile) => void
  disabled: boolean
}
