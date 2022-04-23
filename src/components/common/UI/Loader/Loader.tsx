import React, { FC } from 'react'

import style from './Loader.module.scss'

const Loader: FC = () => {
  return (
    <div className={style.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
