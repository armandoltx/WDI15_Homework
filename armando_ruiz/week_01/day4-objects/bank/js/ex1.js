// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

// This bank has an array of accounts.
var account = [
      {
        name: "Armando",
        balance: 250
      },
      {
        name: "Kat",
        balance: 150
      },
      {
        name: "Jason",
        balance:  500
      }
];
//The bank needs a method that will return the total sum of money in the accounts.
var totalMoney = function( money ){
  var sum = 0;
  for( var i =0; i < account.length; i++){
    sum += account[i].balance;
  }
  console.log( sum );
};
totalMoney(account);
// It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. //There is no need to create additional functions of the bank to delete accounts, etc.
var addAccount = function (newName, newBalance) {
    account.push({
      name: newName,
      balance: newBalance
    });
  };
addAccount ("Peter", 250);
console.log( account );
// Accounts have a current balance and owner's name. You should be able to deposit from an account to change the balance.
var deposit = function( Name, Deposit){
  //if name is similar add money to balance
  for( var i = 0; i < account.length; i++){
    if( account[i].name === Name ){
      account[i].balance = account[i].balance + Deposit;
    }
  }
};
deposit("Armando", 500);
console.log(account);
// Accounts have a current balance and owner's name. You should be able to  withdraw from an account to change the balance.
var withdraw = function( Name, WithDraw){
  //if name is similar add money to balance
  for( var i = 0; i < account.length; i++){
    if( account[i].name === Name ){
      account[i].balance = account[i].balance - WithDraw;
    }
  }
};
withdraw("Jason", 100);
console.log(account);
// Bonus
//
// Ensure that the accounts cannot have negative values.
// for( var i = 0; i < account.length; i++){
//   if( (account[i].name === Name ) && (account[i].balance > Deposit) ){
//     account[i].balance = account[i].balance - Deposit;
//   }else {
//     console.log("You do not have enough money.");
// }
// };
var negative = function( Name, Figure){
	 for( var i = 0; i < account.length; i++){
	      if( (account[i].name === Name ) && (account[i].balance > Figure) ){
	        var result = account[i].balance = account[i].balance - Figure;
	      } else {
	         var  result = ( Name + " You do not have enough money.");
	     }
          return result;
	}
};

 var test= negative("Armando", 1000);
console.log(test);

// // Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
var transfer = function (Name1, Transfer, Name2){
     for( var i = 0; i < account.length; i++){
         if( (account[i].name === Name1 )  && (account[i].balance >= Transfer) ){
           console.log(account[i].name + " balance before transfer is  " + account[i].balance)
             account[i].balance = account[i].balance - Transfer;
             console.log(account[i].name + " balance is now " + account[i].balance)

          }
          if( (account[i].name === Name2 ) ){
              console.log(account[i].name + " balance before transfer is " + account[i].balance)
              account[i].balance = account[i].balance + Transfer;
              console.log(account[i].name + " balance is now " + account[i].balance)
           }
    };
\
};
var test = transfer("Armando", 100, "Kat");
