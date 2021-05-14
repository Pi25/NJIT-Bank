import React, { useState } from 'react'
import TransactionForm from './TransactionForm'
import TransactionList from './TransactionList'
import DateFilter from './DateFilter'
import SearchContainer from './SearchContainer'

const Transactions = () => {
  const [formOpen, setFormOpen] = useState(false)
  const [type, setType] = useState(true)
  const [searchText, setSearchText] = useState('')

  const openDepositForm = () => {
    setFormOpen(true)
    setType(true)
  }
  const openWithdrawForm = () => {
    setFormOpen(true)
    setType(false)
  }
  const closeForm = () => {
    setFormOpen(false)
    setType(true)
  }
  const HandleSearchTextChange = event => {
    setSearchText(event.target.value)
  }

  return (
    <div>
      <div className='account-card'>
        <div className='account-info'>
          <div style={{ flexGrow: 1 }}>
            <h1>Transactions</h1>
          </div>
          <SearchContainer />
        </div>
        <div className='account-description'>
          <div className='transaction-actions'>
            <div>
              <div style={{ display: 'flex' }}>
                <button onClick={openWithdrawForm}>Withdraw</button>
                <button onClick={openDepositForm} className='deposit-button'>
                  Deposit
                </button>
              </div>
              {formOpen && (
                <TransactionForm type={type} closeForm={closeForm} />
              )}
            </div>
          </div>
          <DateFilter />
          <TransactionList />
        </div>
      </div>
    </div>
  )
}

export default Transactions
