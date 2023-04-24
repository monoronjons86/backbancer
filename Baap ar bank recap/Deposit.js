/*
1.add event listener to the deposit button
2-5 .convert string deposit amount to a number type
3.clear the deposit input field after getting the value 
4.get the previous deposit total
*/
document.getElementById('btn-deposit').addEventListener('click',function(){
    const DepositField=document.getElementById('deposit-filed');
    const DepositFieldString=DepositField.value;
    const newDepositAmount=parseFloat(DepositFieldString);
    DepositField.value=' ';

    const DepositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=DepositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);

    const newDepositTotal=previousDepositTotal+newDepositAmount;
    DepositTotalElement.innerText=newDepositTotal;

    const BalanceTotalElement=document.getElementById('balance-total');
    const BalanceTotalElementString=BalanceTotalElement.innerText;
    const BalanceTotal=parseFloat(BalanceTotalElementString);

    const totalBalance=BalanceTotal+newDepositAmount;
    BalanceTotalElement.innerText=totalBalance;


});