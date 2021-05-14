import React, { useEffect } from 'react'
import AccountCard from './AccountCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAccounts } from './accountSlice'
import { useHistory } from 'react-router-dom'

const AccountList = () => {
  const actionDispatch = useDispatch()
  const history = useHistory()
  const accounts = useSelector(state => state.account.accounts)

  const goToCreate = () => {
    history.push('/create-account')
  }
  useEffect(() => {
    actionDispatch(getAccounts())
  }, [])

  return (
    <div className='account-list'>
      <button className='new-button' onClick={goToCreate}>
        Create New Account
      </button>
      {accounts.map(account => (
        <AccountCard account={account} key={account.id} />
      ))}
    </div>
  )
}

export default AccountList
