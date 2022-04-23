import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { UserCardPropTypes } from './UserCardPropTypes'

import styles from './UserCard.module.scss'

const UserCard: FC<UserCardPropTypes> = ({ user }) => {
  return (
    <article className={styles.card}>
      <div className='left'>
        <p>
          <span>ФИО:</span> {user.name}
        </p>
        <p>
          <span>город:</span> {user.address.city}
        </p>
        <p>
          <span>компания:</span> {user.company.name}
        </p>
      </div>
      <div className='right'>
        <Link to={`/users/${user.id}`}>Подробнее</Link>
      </div>
    </article>
  )
}

export default UserCard
