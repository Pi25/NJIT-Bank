import React, { useState } from 'react'
import AccountCardDescription from './AccountCardDescription'
const AccountCard = ({ account }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='account-card'>
      <div className='account-info' onClick={() => setIsOpen(!isOpen)}>
        <div style={{ flexGrow: 1 }}>
          <h1>{account.name}</h1>
        </div>
        <div className='account-action'>
          {isOpen ? (
            <img
              src='/images/up-arrow.png'
              alt='close icon'
              className='account-card-icon'
            />
          ) : (
            <img
              src='/images/down-arrow.png'
              alt='close icon'
              className='account-card-icon'
            />
          )}
        </div>
      </div>
      {isOpen && (
        <div className='account-description'>
          <AccountCardDescription account={account} />
        </div>
      )}
    </div>
  )
}

export default AccountCard
