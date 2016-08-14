# B9lab Week3 Small Project

This project was built using truffle. The frontend is based on the default MetaCoin frontend created when running "truffle init".

###### Frontend:
* Balance of contract
* Balance of account one
* Balance of account two
* Input field of amount to send to contract
* Input field for account one receiver
* Input field for account two receiver
* Get balances button
* Send funds to contract button
 
###### Working:
* Enter an amount
* Enter the from account
* Enter account recipient one and two account's
* First hit the "Get balances" button
* Now hit the "Send funds to contract" button

Once the "Send funds to contract" button has been pressed, the entered amount will be sent to the contract. The DAPP will wait for the transaction receipt. Once a transaction receipt has been received, the balances will be updated automatically. You should see the contract balance increase from zero to the entered transaction amount. The contract will then be instructed to split the amount 50/50 and send it to account one and account two. Again the balances will be updated and the contract balance should be zero again.

The project could still use a lot of improvement, but does fulfill the requirements as outlined for week 3's Small Project.



