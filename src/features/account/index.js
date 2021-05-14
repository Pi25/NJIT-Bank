import React from 'react'
import TitleBar from '../../shared/TitleBar'
import AccountList from './AccountList'
const AccountPage = () => {
  return (
    <div>
      <TitleBar title='Accounts' />
      <AccountList />
    </div>
  )
}

export default AccountPage
