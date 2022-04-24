import { MouseEvent } from 'react'

export interface ButtonPropTypes {
  text: string
  type?: 'button' | 'submit'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}
