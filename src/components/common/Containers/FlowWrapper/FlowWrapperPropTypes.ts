import { ReactNode } from 'react'

type flow = 'row' | 'column'

export interface FlowWrapperPropTypes {
  flow?: flow
  children: ReactNode
}
