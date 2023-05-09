document.getElementById('btn-case-plus').addEventListener('click',function(){
    const caseNumberField=document.getElementById('case-number-filed');
    const caseNumberString=caseNumberField.value ;
    const caseTotalElement=parseInt(caseNumberString);

    const newCaseNumber=caseTotalElement+1;
    caseNumberField.value=newCaseNumber;

});