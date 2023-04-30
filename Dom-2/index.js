// const tagList=document.getElementsByTagName('h1');
// for(const tag of tagList){
//     tag.style.color='red';
// }

// const classList=document.getElementsByClassName('test');
// for(const value of classList){
//     value.style.BackgroundColor='red';
// }
// const myHeading=document.getElementById('heading');
// myHeading.style.textAlign='center';
// myHeading.style.color='red';
// myHeading.style.backgroundColor='green';
// console.log(myHeading.innerText);

// document.getElementById('heading').style.color='yellow';
// document.getElementById('heading').style.backgroundColor='tomato';
// const myElement=document.querySelector('#heading');
// console.log(myElement);
// const myElement=document.getElementById('first-heading');
// myElement.style.color='red';
// myElement.style.backgroundColor='blue';
// myElement.style.padding='20px';

// const parentContainer=document.getElementById('container-details');
// const myLi=document.createElement('li');
// myLi.innerText='four';
// parentContainer.appendChild(myLi);
const parentContainer=document.getElementById('container-details');
const myLi=document.createElement('li');
myLi.innerText='four';
parentContainer.appendChild(myLi);

const sectionCon=document.getElementById('sectionContainer');
const sectionDiv=document.createElement('section');
sectionDiv.innerText='hello';
sectionCon.appendChild(sectionDiv);