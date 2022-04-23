import React, { FC } from 'react'

import { AlertPropTypes } from './AlertPropTypes'

import style from './Alert.module.scss'

const Alert: FC<AlertPropTypes> = ({ type = 'error', text }) => {
  return <div className={`${style.alert} ${type}`}>{text}</div>
}

export default Alert
