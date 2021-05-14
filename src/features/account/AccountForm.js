import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateAccount, createAccount } from './accountSlice'
import {useHistory} from 'react-router-dom'

const AccountForm = ({ account }) => {
  const [accountInfo, setAccountInfo] = useState(account)

  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = event => {
    setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value })
  }
  const handleSubmit = () => {
    //check edit account or create new account
    //if account has id field defined, its a update request else create request
    if (account.id) {
      dispatch(updateAccount(accountInfo))        
      history.push(`/account/${accountInfo.id}`)    
    } else {
      dispatch(createAccount(accountInfo))
      history.push('/')
    }
  }
  const HandleClear = () => {
    //reset account value
    setAccountInfo(account)
  }
  return (
    <div className='account-form'>
      <h2>Name:</h2>
      <input
        type='text'
        value={accountInfo.name}
        onChange={handleChange}
        name='name'
      />
      <h2>Account Type:</h2>
      <select value={accountInfo.type} onChange={handleChange} name='type'>
        <option disabled>Select account type</option>
        <option value='reserve'>Reserve</option>
        <option value='saving'>Savings</option>
        <option value='checking'>Checking</option>
      </select>
      <h2>Account Balance:</h2>
      <input
        type='number'
        value={accountInfo.balance}
        onChange={handleChange}
        name='balance'
      />
      <div className='account-form-action'>
        <button onClick={HandleClear}>Clear</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default AccountForm
