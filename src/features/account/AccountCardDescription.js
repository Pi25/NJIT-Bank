import React from 'react'
import { useHistory } from 'react-router-dom'

const AccountCardDescription = ({ account }) => {
  const history = useHistory()

  const goToEdit = () => {
    history.push(`/update-account/${account.id}`)
  }
  const goToAccountInfo = () => {
    history.push(`/account/${account.id}`)
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div style={{ flexGrow: 1 }}>
        <h2>Balance: ${account.balance}</h2>
        <p>Account Type: {account.type}</p>
        <p>Last Updated: {account.dateUpdated.toDateString()}</p>
        <p>Date Created: {account.dateCreated.toDateString()}</p>
      </div>
      <div className='account-action'>
        <button onClick={goToEdit}>Edit Account</button>
        <button onClick={goToAccountInfo}>View Account Information</button>
      </div>
    </div>
  )
}

export default AccountCardDescription
