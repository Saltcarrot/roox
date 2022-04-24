import React, { FC, useState } from 'react'

import { sort } from '../../../types/user'
import { useFetchUsers } from '../../../hooks/useFetchUsers'
import { sortUsersByCity, sortUsersByCompany } from '../../../utils/sortUsers'

import Wrappers from '../../common/Wrappers'
import UI from '../../common/UI'

import Sidebar from '../../common/Sidebar/Sidebar'
import UserCard from '../../common/UserCard/UserCard'

import styles from '../Page.module.scss'

const Users: FC = () => {
  const [sortValue, setSortValue] = useState<sort>('city')

  const { loading, error, users } = useFetchUsers(false)

  return (
    <Wrappers.Flow flow='row'>
      <Sidebar changeState={setSortValue} />
      <div className={`${styles.user} list`}>
        <Wrappers.Container>
          <UI.PageHeader>Список полльзователей</UI.PageHeader>
          {loading && <UI.Loader />}
          {error && <UI.Alert text={`${error}`} />}
          {users && (
            <>
              {users
                .sort(
                  sortValue === 'city' ? sortUsersByCity : sortUsersByCompany
                )
                .map((user) => {
                  return <UserCard key={user.id} user={user} />
                })}
              <UI.ItemsCounter count={users.length} />
            </>
          )}
        </Wrappers.Container>
      </div>
    </Wrappers.Flow>
  )
}

export default Users
