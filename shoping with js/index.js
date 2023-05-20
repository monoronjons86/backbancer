document.getElementById('first-card').addEventListener('click',function(){
    //get the data from html using id
    const ProductName=document.getElementById('first-name').innerText;
    const ProductPrice=document.getElementById('first-price').innerText;
    const ProductQuantity=document.getElementById('first-quantity').innerText;
    // console.log(typeof ProductPrice,typeof ProductQuantity);
    const priceTotal=parseInt(ProductPrice) * parseInt(ProductQuantity);
    console.log(priceTotal, typeof priceTotal);

    //show the data
    // const container=document.getElementById('table-container')
    // const tr=document.createElement('tr');
    // tr.innerHTML=`
    // <td>${1}</td>
    // <td>${ProductName}</td>
    // <td>${ProductPrice}</td>
    // <td>${ProductQuantity}</td>
    // <td>${priceTotal}</td>
    // `
    // container.appendChild(tr);

    // using function
    displayData(ProductName,ProductPrice,ProductQuantity,priceTotal);

});
//using event object from browser
document.getElementById('second-card').addEventListener('click',function(e){
// console.log(e.target.parentNode)
const productName=e.target.parentNode.parentNode.children[0].innerText;
const productPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
const ProductQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;
console.log(ProductQuantity,productName,productPrice);

const sumToTal=parseInt(productPrice)+parseInt(ProductQuantity);
displayData(productName,productPrice,ProductQuantity,sumToTal);

});



//common function to display data
function displayData(ProductName,ProductPrice,ProductQuantity,priceTotal){
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
}