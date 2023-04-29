// document.getElementById('btn-deposit').addEventListener('click',function(){
//     /*
//     1.get the element by id
//     2.get the value form element
//     3.convert string  value to a number
//     */
//    const newDepositAmount=getInputFiledValueById('deposit-filed');
//    /*
//    get previous deposit total by id
//    */
//   const previousDepositTotal=getTextElementValueById('deposit-total');
//   console.log(newDepositAmount);

//    //calculate new deposit total
//    const newDepositTotal=previousDepositTotal+newDepositAmount;
//    //set deposit total value
//    setTextElementValueById('deposit-total',newDepositTotal);
//    //get the previous balance by using the function
//    const previousBalanceTotal=getTextElementValueById('balance-total');
//    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
//    setTextElementValueById('balance-total',newBalanceTotal); 

// });

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputFieldValueById('deposit-filed');
    const previousDepositTotal=getTextElementValueById('deposit-total');
    const newDepositTotal=previousDepositTotal+newDepositAmount;
    
    setTextElementValueById('deposit-total',newDepositTotal);
    const previousBalanceTotal=getTextElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

});

