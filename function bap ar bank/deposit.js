function getInputFiledValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}
function getTextElementValueById(elementId){
    const textElement=document.getElementById(elementId);
    const textElementValueString=textElement.innerText;
    const textElementValue=parseFloat(textElementValueString);
    return textElementValue;
}
document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
    1.get the element by id
    2.get the value form element
    3.convert string  value to a number
    */
   const newDepositAmount=getInputFiledValueById('deposit-filed');
   /*
   get previous deposit total by id
   */
  const previousDepositTotal=getTextElementValueById('deposit-total');
  console.log(newDepositAmount);

    

});