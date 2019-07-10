import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './main'

const Pages = () => (
  <>
    <Switch>
      <Route to='/' exact component={Main} />
    </Switch>
  </>
)

export default Pages
