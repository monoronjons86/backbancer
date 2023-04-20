// using tagname
const tgList=document.getElementsByTagName('h1');
for(const tag of tgList){
    tag.style.color='yellow';
}

// using classList
const classList=document.getElementsByClassName('test');
for(const list of classList){
    list.style.color='green';
}

const myHeading=document.getElementById('heading')
myHeading.style.color='black';
myHeading.style.textAlign='center';
console.log(myHeading.innerText)

const myElement=document.querySelector('.test')
for(const value of myElement){
    console.log(value);
}


