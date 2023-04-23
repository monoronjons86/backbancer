//step-1:add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2:get the deposit amount form the deposit input filed
    //for  input field use .value to the value inside the input field
    const depositFiled= document.getElementById('deposit-field');
    const depositAmount=depositFiled.value ;
    
    //step-3:get the current deposit total amount
    const depositTotalElement=document.getElementById('deposit-total');
    const depositTotal=depositTotalElement.innerText;
    depositTotalElement.innerText=depositAmount;


});