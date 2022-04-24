import { ReactNode } from 'react'

type flow = 'row' | 'column' | 'block'

export interface FlowWrapperPropTypes {
  flow?: flow
  children: ReactNode
}
