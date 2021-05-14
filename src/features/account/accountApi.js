import { addTransactionApi } from '../transaction/transactionApi'
import axios from "../../../node_modules/axios"
//remove once json server setup
/*var accountList = [];
const getData = () => { 
  axios.get("https://my-json-server.typicode.com/mj434/IS322-json/accounts")
  .then(response => {
    accountList =  response.data;
  }).catch(error => {
    console.log(error.message);
    accountList = [];  
  })
}*/  
var accountList = [
  {
    id: "08786666",
    name: "Test Reserve Account",
    type: "reserve",
    balance: 1600,
    dateCreated: new Date(1995, 11, 17),
    dateUpdated: new Date(2020, 2, 12)
  },
  {
    id: "122666626",
    name: 'My Savings Account',
    type: 'saving',
    balance: 1400,
    dateCreated: new Date(1995, 11, 17),
    dateUpdated: new Date(2020, 2, 12)
  },
  {
    id: "25466677",
    name: "My Checkings Account",
    type: "checking",
    balance: 1200,
    dateCreated: new Date(1995, 11, 17),
    dateUpdated: new Date(2020, 2, 12)
  }
]

export const createAccountApi = data => {
  //Date.now() returns number of miliseconds elapsed since January 1, 1970.
  //using as id

  let newAccount = {
    id: Date.now().toString(),
    ...data,
    dateCreated: new Date(),
    dateUpdated: new Date()
  }
  accountList =[...accountList, newAccount]
}
export const getAccountsApi = () => {
  //await getData()
  return accountList
}
export const getAccountApi = id => {
  let account = accountList.find(element => element.id === id)
  return account
}
export const updateAccountApi = data => {
  let originalAccountIndex = accountList.findIndex(
    account => account.id === data.id
  )
  let originalAccount = accountList.find(account => account.id == data.id)
  let updatedAccount = {
    ...data,
    dateUpdated: new Date()
  }
  //account balance changed
  //record transaction
  if (originalAccount.balance != data.balance) {
    let difference = originalAccount.balance - data.balance
    handleTransaction(difference, originalAccount.id)
  }
  accountList[originalAccountIndex] = updatedAccount
}
const handleTransaction = (difference, accountId) => {
  if (difference > 0) {
    let transaction = {
      accountId: accountId,
      description: 'Balance changed',
      //record absolute value of the difference
      amount: Math.abs(difference),
      type: 'withdraw'
    }
    addTransactionApi(transaction)
  } else if (difference < 0) {
    let transaction = {
      accountId: accountId,
      description: 'Balance changed',
      amount: Math.abs(difference),
      type: 'deposit'
    }
    addTransactionApi(transaction)
  }
}
