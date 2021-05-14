import { createSlice } from '@reduxjs/toolkit'
import {
  createAccountApi,
  getAccountsApi,
  updateAccountApi,
  getAccountApi
} from './accountApi'
const initialState = {
  accounts: [],
  loading: false,
  selectedAccount: null
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccounts: (state, action) => {
      state.accounts = action.payload
    },
    setLoading: state => {
      state.loading = !state.loading
    },
    setSelectedAccount: (state, action) => {
      state.selectedAccount = action.payload
    }
  }
})

export const getAccounts = () => async dispatch => {
  dispatch(setLoading())
  let responseData = await getAccountsApi()
  dispatch(setAccounts(responseData))
  dispatch(setLoading())
}
export const getAccountInfo = id => async dispatch => {
  dispatch(setLoading())
  let responseData = getAccountApi(id)
  dispatch(setSelectedAccount(responseData))
  dispatch(setLoading())
}
export const createAccount = data => async dispatch => {
  dispatch(setLoading())
  createAccountApi(data)
  dispatch(getAccounts())
  dispatch(setLoading())
}
export const updateAccount = data => async dispatch => {
  dispatch(setLoading())
  updateAccountApi(data)
  dispatch(setLoading())
}

export const {
  setLoading,
  setAccounts,
  setSelectedAccount
} = accountSlice.actions
export default accountSlice.reducer
