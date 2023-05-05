document.getElementById('kit-katbuy-btn').addEventListener('click',function(){
   const quantity=document.getElementById('kitkat-quantity').value;
   const kitkatCost=quantity*200;
   document.getElementById('chocolate').innerText=kitkatCost;
});

document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const quantity=document.getElementById('rose-quantity').value;
    const RoseCost=quantity*200;
    document.getElementById('rose').innerText=RoseCost;
 });
 document.getElementById('dairy-btn').addEventListener('click',function(){
    const quantity=document.getElementById('dairy-quantity').value;
    const dairyCost=quantity*200;
    document.getElementById('dairy').innerText=dairyCost;

 });