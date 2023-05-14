// function updatecaseNumber(isIncrease){
//     const caseNumberField=document.getElementById('case-number-filed');
//     const caseNumberString=caseNumberField.value ;
//     const previousCaseNumber=parseInt(caseNumberString);

//     let newCaseNumber;
//     if(isIncrease===true){
//         newCaseNumber=previousCaseNumber+1;
//     }
//     else{
//         newCaseNumber=previousCaseNumber-1;
//     }
//     caseNumberField.value=newCaseNumber;
//     return newCaseNumber;

// }
// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const newCaseNumber=updatecaseNumber(true);

//     const caseTotalPrice=newCaseNumber*59;
//     const caseTotalElement=document.getElementById('case-total');
//     caseTotalElement.innerText=caseTotalPrice;


// });
// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     updatecaseNumber(false);

// });

function updatecaseNumber(isIncrease){
    const caseNumberField=document.getElementById('case-number-filed');
    const caseNumberString=caseNumberField.value ;
    const previousCaseNumber=parseInt(caseNumberString);

    let newCaseNumber;
    if(isIncrease===true){
        newCaseNumber=previousCaseNumber+1;

    }
    else{
        newCaseNumber=previousCaseNumber-1;
    }
    caseNumberField.value =newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice=newCaseNumber*59;
    const caseTotalElement=document.getElementById('case-total');
    caseTotalElement.innerText=caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber=updatecaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();


    // const caseTotalPrice=newCaseNumber*59;
    // const caseTotalElement=document.getElementById('case-total');
    // caseTotalElement.innerText=caseTotalPrice;
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber= updatecaseNumber(false);

  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();

//   const caseTotalPrice=newCaseNumber*59;
//   const caseTotalElement=document.getElementById('case-total');
//   caseTotalElement.innerText=caseTotalPrice;

});