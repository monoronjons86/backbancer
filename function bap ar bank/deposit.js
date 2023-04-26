function getInputFiledValueById(inputId){
    const inputField=document.getElementById('deposit-filed');
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    return inputFieldValue;
}
document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
    1.get the element by id
    2.get the value form element
    3.convert string  value to a number
    */
    

});