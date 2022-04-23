import { MouseEvent } from 'react'

export interface ButtonPropTypes {
  text: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}
