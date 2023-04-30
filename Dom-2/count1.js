let value=0;
document.getElementById('btn-danger').addEventListener('click',function(){
    value=value+1
    document.getElementById('counter').innerText=value;
});

document.getElementById('btn-success').addEventListener('click',function(){
    value-=1
    document.getElementById('counter').innerText=value;

});





// function makeMinus(){
//     value-=1
//     document.getElementById('counter').innerText=value;
// }