import React from 'react'

const Transaction = ({ transaction }) => {
  const getColoredAmount = () => {
    if (transaction.type === 'withdraw') {
      return (
        <p className='transaction-amount withdraw'>${transaction.amount}</p>
      )
    } else {
      return <p className='transaction-amount deposit'>${transaction.amount}</p>
    }
  }
  return (
    <div className='transaction-card'>
      <div>
        <p className='transaction-description'>{transaction.description}</p>
        <p className='transaction-date'>{transaction.dateCreated.toDateString()}</p>
      </div>
      {getColoredAmount()}
    </div>
  )
}

export default Transaction
