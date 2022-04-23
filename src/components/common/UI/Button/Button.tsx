import React, { FC } from 'react'

import { ButtonPropTypes } from './ButtonPropTypes'

import styles from './Button.module.scss'

const Button: FC<ButtonPropTypes> = ({ text, onClick }) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
