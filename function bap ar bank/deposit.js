function getInputVFiledValueById(inputId){
    const inputField=document.getElementById(inputId);
    const inputFieldValueString=inputField.value ;
    const inputFieldValue=parseFloat(inputFieldValueString);
    return inputFieldValue;
}

function getElementById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.innerText;
    const value=parseFloat(elementValueString);
    return value;

}
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputVFiledValueById('deposit-field')
    

});