document.getElementById('first-card').addEventListener('click',function(){
    //get the data from html using id
    const ProductName=document.getElementById('first-name').innerText;
    const ProductPrice=document.getElementById('first-price').innerText;
    const ProductQuantity=document.getElementById('first-quantity').innerText;
    // console.log(typeof ProductPrice,typeof ProductQuantity);
    const priceTotal=parseInt(ProductPrice) * parseInt(ProductQuantity);
    console.log(priceTotal, typeof priceTotal);

    const container=document.getElementById('table-container')
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${ProductName}</td>
    <td>${ProductPrice}</td>
    <td>${ProductQuantity}</td>
    <td>${priceTotal}</td>
    `
    container.appendChild(tr);


});