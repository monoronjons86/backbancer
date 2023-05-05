document.getElementById('kit-katbuy-btn').addEventListener('click',function(){
   const quantity=getInputValue('kitkat-quantity')
   const kitkat=quantity*100
   setInnerText('chocolate',kitkat)
   total()
});

document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const quantity=getInputValue('rose-quantity')
    const RoseCost=quantity*200;
    setInnerText('rose',RoseCost);
    total()
 });
 document.getElementById('dairy-btn').addEventListener('click',function(){
    const quantity=document.getElementById('dairy-quantity').value;
    const dairyCost=quantity*200;
    setInnerText('dairy',dairyCost);
    total()

 });

 function setInnerText(id,value){
    document.getElementById(id).innerText=value
 }
 function getInputValue(id){
    const quantity=document.getElementById(id).value;
    return parseInt(quantity);
 }
 function total(){
    const chocolate=document.getElementById('chocolate').innerText;
    const rose=document.getElementById('rose').innerText;
    const dairy=document.getElementById('dairy').innerText;
    const totalSum=parseInt(chocolate)+parseInt(rose)+parseInt(dairy);
    setInnerText('Total',totalSum);
 }