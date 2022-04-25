import React, { FC } from 'react'
import { Formik, Form as FormikForm } from 'formik'

import { UserProfile } from '../../../../../types/user'

import Wrappers from '../../../Wrappers'
import UI from '../..'

import { ProfileFormPropTypes } from './ProfileFormPropTypes'

import styles from './ProfileForm.module.scss'

const ProfileForm: FC<ProfileFormPropTypes> = ({
  fields,
  validationSchema,
  onSubmit,
  disabled,
}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={
        Object.fromEntries(
          Object.entries(fields).map(([name, { value }]) => [name, value])
        ) as unknown as UserProfile
      }
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleChange }) => (
        <FormikForm className={styles.form}>
          {Object.entries(fields).map(([name, { label, type }]) => {
            return (
              <Wrappers.Flow flow='column' key={name}>
                <UI.Form.Label htmlFor={name} text={label} />
                <UI.Form.Input
                  name={name}
                  type={type}
                  value={values[name as keyof typeof values]}
                  onChange={handleChange}
                  disabled={disabled}
                  error={errors[name as keyof typeof errors] ? 'invalid' : ''}
                />
              </Wrappers.Flow>
            )
          })}
          <Wrappers.Flow flow='row'>
            <UI.Button text='Отправить' type='submit' disabled={disabled} />
          </Wrappers.Flow>
        </FormikForm>
      )}
    </Formik>
  )
}

export default ProfileForm
