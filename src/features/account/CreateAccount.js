import React from 'react'
import TitleBar from '../../shared/TitleBar'
import AccountForm from './AccountForm'

const newAccount = {
  name: '',
  type: 'checking',
  balance: 0
}
const CreateAccount = () => {
  return (
    <div>
      <TitleBar title='Create Account' />
      <AccountForm account={newAccount} />
    </div>
  )
}

export default CreateAccount
