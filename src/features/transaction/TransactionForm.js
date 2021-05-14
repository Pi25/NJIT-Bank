import React, { useState } from 'react'
import { addTransaction } from './transactionSlice'
import { useDispatch } from 'react-redux'

const newTransaction = {
  description: '',
  amount: 0
}

const TransactionForm = ({ type, closeForm }) => {
  const [transac, setTransac] = useState(newTransaction)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    let transactionType = type ? 'deposit' : 'withdraw'
    dispatch(addTransaction({ ...transac, type: transactionType }))
  }
  const handleClear = () => {
    setTransac(newTransaction)
  }
  const handleChange = event => {
    setTransac({ ...transac, [event.target.name]: event.target.value })
  }
  const handleClose = () => {
    closeForm()
  }

  return (
    <div>
      <h2>Amount:</h2>
      <input
        type='number'
        value={transac.amount}
        onChange={handleChange}
        name='amount'
      />
      <h2>Description</h2>
      <input
        type='text'
        value={transac.description}
        onChange={handleChange}
        name='description'
      />
      <div className='transaction-form-action'>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleClose}>Close</button>
        <button
          onClick={handleSubmit}
          style={{ backgroundColor: type ? 'green' : 'red' }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default TransactionForm
