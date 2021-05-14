import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const AccountDetails = () => {
  const account = useSelector(state => state.account.selectedAccount)
  const history = useHistory()

  const goToEdit = () => {
    history.push(`/update-account/${account.id}`)
  }

  return (
    <div className='account-details'>
      <div>
        <h2>Balance: ${account.balance}</h2>
        <p>
          <strong>Account Type:</strong> {account.type}
        </p>
        <p>
          <strong>Last Updated:</strong> {account.dateUpdated.toDateString()}
        </p>
        <p>
          <strong>Date Created:</strong> {account.dateCreated.toDateString()}
        </p>
      </div>
      <div>
        <button onClick={goToEdit}>Edit Account</button>
      </div>
    </div>
  )
}

export default AccountDetails
