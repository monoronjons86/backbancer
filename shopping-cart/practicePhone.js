function updatePhoneNumber(isIncrease){
    const phoneNumberField=document.getElementById('phone-number-filed');
    const phoneNumberString=phoneNumberField.value ;
    const previousPhoneNumber=parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber=previousPhoneNumber+1;
    }
    else{
        newPhoneNumber=previousPhoneNumber-1;
    }
    phoneNumberField.value=newPhoneNumber;
    return newPhoneNumber;

}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice=newPhoneNumber*1219;
    const phoneTotalElement=document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
}
function getTextElementValueById(element){
    const phoneTotalElement=document.getElementById(element);
    const currentPhoneTotalString=phoneTotalElement.innerText;
    const currentPhoneTotal=parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   const newPhoneNumber=updatePhoneNumber(true);
   updatePhoneTotalPrice(newPhoneNumber);

   //calculate total
   const currentPhoneTotal=getTextElementValueById('phone-total');
   const currentCaseTotal=getTextElementValueById('case-total');
   const currentSubTotal=currentPhoneTotal+currentCaseTotal;



});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
   const newPhoneNumber=updatePhoneNumber(false);
   updatePhoneTotalPrice(newPhoneNumber);


});