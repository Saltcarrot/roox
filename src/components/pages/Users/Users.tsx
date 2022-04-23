import React, { FC, useState } from 'react'

import { sort } from '../../../types/user'
import { useFetchUsers } from '../../../hooks/useFetchUsers'
import { sortUsersByCity, sortUsersByCompany } from '../../../utils/sortUsers'

import UI from '../../common/UI'
import Wrapper from '../../common/Containers'

import UserCard from '../../common/UserCard/UserCard'

import './Users.module.scss'

const Users: FC = () => {
  const [sortValue, setSortValue] = useState<sort>('city')

  const { loading, error, users } = useFetchUsers()

  return (
    <Wrapper.Flow flow='row'>
      <aside className='sidebar'>
        <Wrapper.Container>
          <Wrapper.Flow flow='column'>
            <h3>Сортировка</h3>
            <UI.Button text='по городу' onClick={() => setSortValue('city')} />
            <UI.Button
              text='по компании'
              onClick={() => setSortValue('company')}
            />
          </Wrapper.Flow>
        </Wrapper.Container>
      </aside>
      <div className='user_list'>
        <Wrapper.Container>
          <h1>Список полльзователей</h1>
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
        </Wrapper.Container>
      </div>
    </Wrapper.Flow>
  )
}

export default Users
