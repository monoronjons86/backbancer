/*
1.add event handler with the withdraw button 
2.get the withdraw amount from the input filed
2.5.also make sure to convert to the input into a number by using parsefloat;
3.Get previous withdraw total;
4.calculate total withdraw;
4-5.set total withdraw amount;
5.get the previous balance total
6.calculate the new balance total
6.5 set the new balance total
7.clear the input filed;


*/

/*
//step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step-2:
    const withdrawField=document.getElementById('withdraw-filed');
    const newWithDrawAmountString=withdrawField.value ;
    const newWithDrawAmount=parseFloat(newWithDrawAmountString);
    

    //step-3:
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
    const previousWithdrawTotal=parseFloat(previousWithdrawTotalString);
    
    //step-4:
    const currentWithdrawTotal=previousWithdrawTotal+newWithDrawAmount;
    withdrawTotalElement.innerText=currentWithdrawTotal;

    //step-5:
    const BalanceTotalElement=document.getElementById('balance-total');
    const previousBalanceTotalString=BalanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);

    //step-6
    const newBalanceTotal=previousBalanceTotal-newWithDrawAmount;
    BalanceTotalElement.innerText=newBalanceTotal; 

    //step-7:
    withdrawField.value=''


});
*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-filed');
    const withdrawFieldTotalString=withdrawField.value;
    const withdrawFieldTotal=parseFloat(withdrawFieldTotalString);
    console.log(typeof withdrawFieldTotal);


});