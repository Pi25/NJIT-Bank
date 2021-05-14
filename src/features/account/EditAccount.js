import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TitleBar from '../../shared/TitleBar'
import AccountForm from './AccountForm'
import { getAccountInfo } from './accountSlice'
const EditAccount = () => {
  let { accountId } = useParams()
  const dispatch = useDispatch()
  const selectedAccount = useSelector(state => state.account.selectedAccount)

  useEffect(() => {
    dispatch(getAccountInfo(accountId))
  }, [accountId])

  return (
    <div>
      <TitleBar title='Edit Account' />
      {/* only visible if selected account is populated */}
      {selectedAccount?.id && <AccountForm account={selectedAccount} />}
    </div>
  )
}

export default EditAccount
