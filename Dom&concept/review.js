
document.getElementById('review-btn').addEventListener('click',function(){
    const myElement=document.getElementById('flotingTextArea2');
    const myElementValue=myElement.value;
    // console.log(myElementValue);

    const h1=document.createElement('h1')
    h1.innerText=myElementValue;
    // console.log(h1)
    const parent=document.querySelector('#comment-container');
    parent.appendChild(h1);
    document.getElementById('flotingTextArea2').value='';
    

});