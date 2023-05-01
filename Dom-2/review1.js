document.getElementById('review-btn').addEventListener('click',function(){
const myElement=document.getElementById('foatingTextArea2');
const myElementValue=myElement.value ;
myElement.value='';

const p=document.createElement('p')
p.innerText=myElementValue;

const parent=document.querySelector('#commet-container');
parent.appendChild(p);

});