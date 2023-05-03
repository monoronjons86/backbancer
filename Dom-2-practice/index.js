// const tagList=document.getElementsByTagName('h1');
// for(const tag of tagList){
//     tag.style.color='red';
// }

// const classList=document.getElementsByClassName('test');
// for(const list of classList ){
//     list.style.color='green';
// }

// const heading=document.getElementById('heading');
// heading.style.color='green';
// heading.style.textAlign='center';
// heading.style.padding='20px';
// heading.style.fontSize='50px';

const ParentContainer=document.getElementById('container-details')
const myLi=document.createElement('li');
myLi.innerText='four';
ParentContainer.appendChild(myLi);

const container=document.getElementById('section-container');
const myDiv=document.createElement('div');
const h1h=document.createElement('h1');
h1h.innerText='exploring the event';
myDiv.appendChild(h1h);
container.appendChild(myDiv)

// const container=document.getElementById('sectionContainer');
// const div=document.createElement('div');
// const h1=document.createElement('h1');
// h1.innerText='Exploring the js ';
// div.appendChild(h1);
// container.appendChild(div);



