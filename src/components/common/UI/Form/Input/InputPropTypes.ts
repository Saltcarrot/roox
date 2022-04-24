import { ChangeEvent } from 'react'

export interface InputPropTypes {
  name: string
  type: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}
