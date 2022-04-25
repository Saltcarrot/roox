import React, { FC } from 'react'
import { Field } from 'formik'

import { InputPropTypes } from './InputPropTypes'

import styles from './Input.module.scss'

const Input: FC<InputPropTypes> = ({
  type,
  value,
  name,
  onChange,
  disabled,
  error,
}) => {
  return (
    <Field
      className={`${styles.input} ${type} ${error}`}
      name={name}
      as={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  )
}

export default Input
