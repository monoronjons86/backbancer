document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled=document.getElementById('withdraw-field');
    const newWithdrawFiledString=withdrawFiled.value ;
    const newWithdrawAmount=parseFloat(newWithdrawFiledString);
    withdrawFiled.value='';

    const withdrawTotalElement=document.getElementById('withdraw-total');
    const withdrawTotalElementString=withdrawTotalElement.innerText ;
    const withdrawTotal=parseFloat(withdrawTotalElementString);

    const newWithdrawTatal=withdrawTotal+newWithdrawAmount;
    withdrawTotalElement.innerText=newWithdrawTatal;

    const balanceElement=document.getElementById('balance-total');
    const BalanceTotalElementString=balanceElement.innerText;
    const newBalance=parseFloat(BalanceTotalElementString);

    const BalanceTotal=newBalance-newWithdrawTatal;
    balanceElement.innerText=BalanceTotal;




});