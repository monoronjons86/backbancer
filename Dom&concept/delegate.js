document.querySelector('div').addEventListener('click',function(e){
    console.log(e.target.tagName); 
    console.log('clicked here');
    if((e.target.tagName='BUTTON')){
        console.log('got all button')
    }
});