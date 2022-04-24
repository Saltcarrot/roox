import React, { FC } from 'react'

import { PageHeaderPropTypes } from './PageHeaderPropTypes'

import styles from './PageHeader.module.scss'

const PageHeader: FC<PageHeaderPropTypes> = ({ children }) => {
  return <h1 className={styles.page_header}>{children}</h1>
}

export default PageHeader
