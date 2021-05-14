import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Accounts from './features/account'
import EditAccount from './features/account/EditAccount'
import CreateAccount from './features/account/CreateAccount'
import AccountInfo from './features/account/AccountInfo'
import AppBar from './shared/AppBar'
import './App.css'

const history = createBrowserHistory()

function App () {
  return (
    <div className='App'>
      <div className='container'>
        <AppBar />
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Accounts} />
            <Route exact path='/account' component={Accounts} />
            <Route
              exact
              path='/update-account/:accountId'
              component={EditAccount}
            />
            <Route exact path='/create-account' component={CreateAccount} />
            <Route exact path='/account/:accountId' component={AccountInfo} />
            <Route component={Accounts} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
