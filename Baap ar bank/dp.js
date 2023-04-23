//step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2:get the deposit amount form the deposit input filed
    //for  input field use .value to the value inside the input field
    const depositFiled= document.getElementById('deposit-field');
    const newDepositAmountString=depositFiled.value ;
    const newDepositAmount=parseFloat(newDepositAmountString);
    
    //step-3:get the current deposit total amount
    const depositTotalElement=document.getElementById('deposit-total');
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString)
    
     //step-4:add numbers to set the total deposit
    const currentDepositTotal=previousDepositTotal+newDepositAmount;
    depositTotalElement.innerText=currentDepositTotal;

    //step-5:get balance current total
    const BalanceTotalElement=document.getElementById('balance-total');
    const BalanceTotalElementString=BalanceTotalElement.innerText;
    const previousBalanceTotal=parseFloat(BalanceTotalElementString);

    //step-6:calculate current total balance
     const currentBalanceTotal=previousBalanceTotal+newDepositAmount;

     BalanceTotalElement.innerText=currentBalanceTotal

    //step-7:clear the deposit field
    depositFiled.value='';


});