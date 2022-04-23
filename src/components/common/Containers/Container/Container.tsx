import React, { FC } from 'react'

import { ContainerPropTypes } from './ContainerPropTypes'

import styles from './Container.module.scss'

const Container: FC<ContainerPropTypes> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
