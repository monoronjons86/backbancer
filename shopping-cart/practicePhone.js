function updatePhoneNumber(){
    const phoneNumberField=document.getElementById('phone-number-filed');
    const phoneNumberString=phoneNumberField.value ;
    const previousPhoneNumber=parseInt(phoneNumberString);

    const newPhoneNumber=previousPhoneNumber+1;
    phoneNumberField.value=newPhoneNumber;

}
document.getElementById('btn-phone-plus').addEventListener('click',function(){


});