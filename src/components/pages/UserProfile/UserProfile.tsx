import React, { FC, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useFetchUsers } from '../../../hooks/useFetchUsers'
import { useFormikFields } from '../../../hooks/useFormikFields'

import { Fields } from '../../../types/fields'
import { UserProfile } from '../../../types/user'

import Wrappers from '../../common/Wrappers'
import Sidebar from '../../common/Sidebar/Sidebar'
import UI from '../../common/UI'

import styles from '../Page.module.scss'

const UserProfile: FC = () => {
  const { id } = useParams<{ id: string }>()

  const { loading, error, singleUser } = useFetchUsers(true, id)

  const initialFields: Fields = {
    name: { label: 'Name', type: 'input', value: '' },
    username: {
      label: 'User name',
      type: 'input',
      value: '',
    },
    email: { label: 'Email', type: 'input', value: '' },
    street: { label: 'Street', type: 'input', value: '' },
    city: { label: 'City', type: 'input', value: '' },
    zipcode: { label: 'Zip code', type: 'input', value: '' },
    phone: { label: 'Phone', type: 'input', value: '' },
    website: { label: 'Website', type: 'input', value: '' },
    comment: {
      label: 'Comment',
      type: 'textarea',
      value: '',
    },
  }

  const [disabled, setDisabled] = useState<boolean>(true)

  const { fields } = useFormikFields(singleUser, initialFields)

  const onSubmitHandler = (values: UserProfile) => {
    console.log(values)
  }

  return (
    <Wrappers.Flow flow='row'>
      <Sidebar />
      <div className={`${styles.user} profile`}>
        <Wrappers.Container>
          <UI.PageHeader>
            Профиль пользователя
            <UI.Button
              text='Редактировать'
              onClick={() => setDisabled(!disabled)}
            />
          </UI.PageHeader>
          <Wrappers.Flow flow='block'>
            {loading && <UI.Loader />}
            {error && <UI.Alert text={`${error}`} />}
            {fields && (
              <UI.Form.Container
                fields={fields}
                onSubmit={onSubmitHandler}
                disabled={disabled}
              />
            )}
          </Wrappers.Flow>
        </Wrappers.Container>
      </div>
    </Wrappers.Flow>
  )
}

export default UserProfile
