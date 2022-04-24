import React, { FC } from 'react'

import Wrappers from '../Wrappers'
import UI from '../UI'

import { SidebarPropTypes } from './SidebarPropTypes'

import style from './Sidebar.module.scss'

const Sidebar: FC<SidebarPropTypes> = ({ changeState }) => {
  return (
    <aside className={style.sidebar}>
      <Wrappers.Container>
        <Wrappers.Flow flow='block'>
          <h3>Сортировка</h3>
          <UI.Button
            text='по городу'
            // Костыль, но по макету сайдбар остается одинаковым,
            // а кнопки на странице пользователя становятся бесполезными
            onClick={() => (changeState ? changeState('city') : {})}
          />
          <UI.Button
            text='по компании'
            onClick={() => (changeState ? changeState('company') : {})}
          />
        </Wrappers.Flow>
      </Wrappers.Container>
    </aside>
  )
}

export default Sidebar
