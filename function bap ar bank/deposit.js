function getInputFiledValueById(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}
function getElementValueById(elementId){
    const element=document.getElementById(elementId)
    const elementValueString=element.innerText;
    const value=parseFloat(elementValueString);
}
document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
    1.get the element by id
    2.get the value form element
    3.convert string  value to a number
    */
   const newDepositAmount=getInputFiledValueById('deposit-filed');

    

});