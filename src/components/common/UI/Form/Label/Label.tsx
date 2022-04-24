import React, { FC } from 'react'

import { LabelPropTypes } from './LabelPropTypes'

import styles from './Label.module.scss'

const Label: FC<LabelPropTypes> = ({ htmlFor, text }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  )
}

export default Label
