//option:2
function makeRed(){
    document.body.style.backgroundColor='red';
}
//option:3
const makeBlueButton=document.getElementById('make-blue');
makeBlueButton.onclick=makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}
//option:4
const purplEButton=document.getElementById('make-purple')
purplEButton.onclick=function makePurple(){
    document.body.style.backgroundColor='purple';
}