/*
1.add withdraw button event handler
2.get withdraw amount by using getInputFieldValueById function
3.get previous withdraw amount by using getTextElementValueById function
4.calculate new withdraw total and set the value
*/
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFiledValueById('withdraw-field');
    const previousWithdrawTotal=getTextElementValueById('withdraw-total');
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount

    
});