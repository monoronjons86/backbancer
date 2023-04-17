function makeRed(){
    document.body.style.backgroundColor='red';
    document.getElementById('heading').innerText='testing dom events';
}

function makeBlue(){
    document.body.style.backgroundColor='blue';
    document.getElementById('hand').innerText='with dom';
}
const myEvent=document.getElementById('btn-secondary');
myEvent.addEventListener('click',function(){
    document.body.style.backgroundColor='yellow'

});