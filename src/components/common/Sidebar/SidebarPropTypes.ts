import { Dispatch, SetStateAction } from 'react'
import { sort } from '../../../types/user'

export interface SidebarPropTypes {
  changeState?: Dispatch<SetStateAction<sort>>
}
