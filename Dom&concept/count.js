let value=0;
document.getElementById('danger').addEventListener('click',function(){
    value=value+1
    // console.log(value);
document.getElementById('counter').innerText=value;
});