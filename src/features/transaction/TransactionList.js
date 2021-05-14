import React, { useEffect } from 'react'
import Transaction from './Transaction'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactions } from './transactionSlice'

const TransactionList = () => {
  const dispatch = useDispatch()
  const filteredtransactions = useSelector(
    state => state.transaction.filteredtransactions
  )
  const selectedAccountId = useSelector(
    state => state.account.selectedAccount.id
  )

  useEffect(() => {
    dispatch(getTransactions())
  }, [selectedAccountId])

  return (
    <>
      {filteredtransactions.map(transaction => (
        <Transaction transaction={transaction} key={transaction.id} />
      ))}
    </>
  )
}

export default TransactionList
