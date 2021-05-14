var transactionList = [
  {
    id: '0',
    accountId: '25466677',
    description: 'Stock Trading',
    amount: 20,
    type: 'deposit',
    dateCreated: new Date()
  },
  {
    id: '1',
    accountId: '25466677',
    description: 'Pay Check',
    amount: 20,
    type: 'deposit',
    dateCreated: new Date()
  },
  {
    id: '2',
    accountId: '25466677',
    description: 'Venmo',
    amount: 20,
    type: 'withdraw',
    dateCreated: new Date()
  }
]

export const addTransactionApi = data => {
  //Date.now() returns number of miliseconds elapsed since January 1, 1970.
  //using as id
  let newTransaction = {
    id: Date.now().toString(),
    ...data,
    dateCreated: new Date()
  }
  transactionList.push(newTransaction)
  //
  //
  //
  //
  // TODO Update account Balance
}
export const getTransactionsApi = id => {
  let list = transactionList.filter(transaction => transaction.accountId == id)
  return list
}
