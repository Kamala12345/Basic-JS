// Write a programme to impact the balances of the given accounts, based on their transactions.
// Print the final balance for all the accounts with account number, name and balance amount.

/* Input */
const accounts = [
  {
    'name': 'Arun',
    'accountNo': '001',
  },
  {
    'name': 'Babu',
    'accountNo': '002',
  },
  {
    'name': 'Chandra',
    'accountNo': '003',
  },
];

const balances = {
  // accountNo: balance
  '001': 5000,
  '002': 2000,
  '003': 0,
};

const transactions = [
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '001',
    'type': 'deposit',
    'amount': 500,
  },
  {
    'accountNo': '001',
    'type': 'withdrawal',
    'amount': 1000,
  },
  {
    'accountNo': '002',
    'type': 'deposit',
    'amount': 300,
  },
  {
    'accountNo': '002',
    'type': 'withdrawal',
    'amount': 200,
  },
  {
    'accountNo': '003',
    'type': 'deposit',
    'amount': 200,
  },
];
 //var bal=Object.values(balances)[0];
 //console.log(bal);
var updateBalancesWithTransactions = function() {
   
for(var i=0;i<transactions.length;i++)
{
    
  if(balances.hasOwnProperty(transactions[i].accountNo))
  {
   if(transactions[i].type=="withdrawal")
   {
       balances[transactions[i].accountNo] -= transactions[i].amount;
   }
   else
   {
              balances[transactions[i].accountNo] += transactions[i].amount;
   }
}

}
};
var displayBalances = function() {
// Implement display code here.
for(var i=0;i<accounts.length;i++)
{
  console.log("Account Number : ", accounts[i].accountNo);
  console.log("Name           : ",accounts[i].name);
 console.log("Balance        : ",Object.values(balances)[i]);

}
};
// Do not change below this
var main = function() {
console.log('Balances before transactions');
displayBalances();
updateBalancesWithTransactions();
console.log('Balances after transactions');
displayBalances();
}

main();
