import React, { FC } from 'react'

import { FlowWrapperPropTypes } from './FlowWrapperPropTypes'

import style from './FlowWrapper.module.scss'

const FlowWrapper: FC<FlowWrapperPropTypes> = ({ flow = 'row', children }) => {
  return <div className={`${style.wrapper} ${flow}`}>{children}</div>
}

export default FlowWrapper
