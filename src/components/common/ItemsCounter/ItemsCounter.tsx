import React, { FC } from 'react'

import { ItemsCounterPropTypes } from './ItemsCounterPropTypes'

import styles from './ItemsCounter.module.scss'

const ItemsCounter: FC<ItemsCounterPropTypes> = ({ count }) => {
  return <div className={styles.counter}>Найдено {count} пользователей</div>
}

export default ItemsCounter
