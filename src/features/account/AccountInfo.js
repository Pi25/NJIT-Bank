import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAccountInfo } from './accountSlice'
import TitleBar from '../../shared/TitleBar'
import AccountDetails from './AccountDetails'
import Transactions from '../transaction'

const AccountInfo = () => {
  let { accountId } = useParams()
  const dispatch = useDispatch()
  const selectedAccount = useSelector(state => state.account.selectedAccount)

  useEffect(() => {
    dispatch(getAccountInfo(accountId))
  }, [accountId])

  return (
    <div>
      {selectedAccount?.id && (        
      // if selectedAccount is set
        <>
          <TitleBar title={selectedAccount.name} />
          <AccountDetails />
          <Transactions />
        </>
      )}
    </div>
  )
}

export default AccountInfo
