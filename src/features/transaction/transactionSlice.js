import { createSlice } from '@reduxjs/toolkit'
import { getTransactionsApi, addTransactionApi } from './transactionApi'

const initialState = {
  transactions: [],
  loading: false,
  filteredtransactions: []
}

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload
      state.filteredtransactions = action.payload
    },
    setFilteredTransaction: (state, action) => {
      state.filteredtransactions = action.payload
    },
    setLoading: state => {
      state.loading = !state.loading
    }
  }
})

export const getTransactions = () => async (dispatch, getState) => {
  let selectedAccountId = getState().account.selectedAccount.id
  dispatch(setLoading())
  let responseData = getTransactionsApi(selectedAccountId)
  dispatch(setTransactions(responseData))
  dispatch(setLoading())
}
export const addTransaction = data => async (dispatch, getState) => {
  let selectedAccountId = getState().account.selectedAccount.id
  dispatch(setLoading())
  let newTransaction = {
    ...data,
    accountId: selectedAccountId
  }
  addTransactionApi(newTransaction)
  dispatch(getTransactions())
  dispatch(setLoading())
}
export const filterByDate = date => async (dispatch, getState) => {
  dispatch(setLoading())
  let data = getState().transaction.transactions
  let filteredData = getFilteredDate(date, data)
  dispatch(setFilteredTransaction(filteredData))
  dispatch(setLoading())
}
export const filterBySearchText = search => async (dispatch, getState) => {
  dispatch(setLoading())
  let data = getState().transaction.transactions
  let tempData = []
  data.forEach(transac => {
    if (transac.description.includes(search)) {
      tempData.push(transac)
    }
  })
  dispatch(setFilteredTransaction(tempData))
  dispatch(setLoading())
}
//helper function to get filteredDate
const getFilteredDate = (date, data) => {
  if (date.year == -1) {
    return data
  } else if (date.year != -1 && date.month == -1) {
    return filterByYear(date, data)
  } else if (date.year != -1 && date.month != -1) {
    return filterByYearAndMonth(date, data)
  }
}
const filterByYear = (date, data) => {
  let tempList = []
  data.forEach(transac => {
    let isSameYear = date.year == new Date(transac.dateCreated).getFullYear()
    if (isSameYear) {
      tempList.push(transac)
    }
  })
  return tempList
}
const filterByYearAndMonth = (date, data) => {
  let tempList = []
  data.forEach(transac => {
    let isSameYear = date.year == new Date(transac.dateCreated).getFullYear()
    let isSameMonth = date.month == new Date(transac.dateCreated).getMonth()
    if (isSameYear && isSameMonth) {
      tempList.push(transac)
    }
  })
  return tempList
}

export const {
  setLoading,
  setTransactions,
  setFilteredTransaction
} = transactionSlice.actions
export default transactionSlice.reducer
