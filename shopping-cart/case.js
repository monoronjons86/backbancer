/*
1.add event listener to the case plus button
2.get the value inside the case number filed(input filed)
3.convert the number to an integer;
4.calculate the new case number;
5.set the value to the case number field

*/
function updatecaseNumber(isIncrease){
    const caseNumberField= document.getElementById('case-number-filed');
    const caseNumberString=caseNumberField.value;
    const previousCaseNumber=parseInt(caseNumberString);
 
    let newCaseNumber;
    if(isIncrease===true){
        newCaseNumber=previousCaseNumber+1
    }
    else{
        newCaseNumber=previousCaseNumber-1;
    }
    caseNumberField.value=newCaseNumber;
    return newCaseNumber

}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber= updatecaseNumber(true);
    const caseTotalPrice=newCaseNumber*59;
    const caseTotalElement=document.getElementById('case-total');
    caseTotalElement.innerText=caseTotalPrice;

});
document.getElementById('btn-case-minus').addEventListener('click',function(){
    updatecaseNumber(false)

});