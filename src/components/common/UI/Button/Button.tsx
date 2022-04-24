import React, { FC } from 'react'

import { ButtonPropTypes } from './ButtonPropTypes'

import styles from './Button.module.scss'

const Button: FC<ButtonPropTypes> = ({
  text,
  type = 'button',
  onClick = () => {},
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
