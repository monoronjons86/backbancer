let value=0
document.getElementById('primary').addEventListener('click',function(){
    value+=1;
document.getElementById('counter').innerText=value;
});

document.getElementById('danger').addEventListener('click',function(){
    value-=1;
    document.getElementById('counter').innerText=value;
});