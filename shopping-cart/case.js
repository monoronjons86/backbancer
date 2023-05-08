/*
1.add event listener to the case plus button
2.get the value inside the case number filed(input filed)
3.convert the number to an integer;
4.calculate the new case number;
5.set the value to the case number field

*/

document.getElementById('btn-case-plus').addEventListener('click',function(){
   const caseNumberField= document.getElementById('case-number-filed');
   const caseNumberString=caseNumberField.value;
   const previousCaseNumber=parseInt(caseNumberString);

   const newCaseNumber=previousCaseNumber+1;
   caseNumberField.value=newCaseNumber

});
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseNumberField=document.getElementById()

});