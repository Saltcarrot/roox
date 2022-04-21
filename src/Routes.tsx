import React, { FC } from 'react'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from 'react-router-dom'

import Pages from './components/pages'

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/users' element={<Pages.Users />} />
        <Route path='/users/:id' element={<Pages.UserProfile />} />
        <Route path='*' element={<Navigate to='/users' />} />
      </Switch>
    </Router>
  )
}

export default Routes
