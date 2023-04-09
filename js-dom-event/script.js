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
///////
const pinkButton=document.getElementById('make-pink')
pinkButton.addEventListener('click',makePink())

function makePink(){
    document.body.style.backgroundColor='pink'
}
/////option :4
const makeGreenButton=document.getElementById('make-green')
makeGreenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
})
//option:4 final
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod'

});