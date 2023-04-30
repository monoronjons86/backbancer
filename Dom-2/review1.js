document.getElementById('review-btn').addEventListener('click',function(){
const myElement=document.getElementById('foatingTextArea2');
const myElementValue=myElement.value ;

const h1=document.createElement('h1')
h1.innerText=myElementValue;

const parent=document.querySelector('#commet-container');
parent.appendChild(h1);

});