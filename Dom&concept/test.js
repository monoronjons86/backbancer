// using tagname
//  const tagList=document.getElementsByTagName('h1');
//  for(const tag of tagList){
//      tag.style.color='red';

//  }

// for(let i=0;i<tagList.length;i++){
//     console.log(tagList[i].innerText);
// }

//using className
// const classList=document.getElementsByClassName('test');
// for(const value of classList){
//     value.style.backgroundColor='blue';

// }
// const myHeading=document.getElementById('heading');
// myHeading.style.textAlign='center';
// myHeading.style.color='red';
// console.log(myHeading.innerText);

// document.getElementById('heading').style.color='yellow'
// document.getElementById('heading').style.textAlign='center'

const myElement=document.querySelectorAll('.test')
for(const value of myElement)
{
    console.log(value.innerText);

}

// const myElement=document.getElementById('first-heading');
// myElement.className='myclass';

// const parenContainer=document.getElementById('container-details');
// const  MyLi=document.createElement('li');
// MyLi.innerText='i am bla bla';
// parenContainer.appendChild(MyLi);

// const container=document.getElementById('section-container');
// //create a div
// const div=document.createElement('div');
// // console.log(div);
// //make a h1 tag
// const h1=document.createElement('h1')
// h1.innerText='Exploring dynamic js'
// //put h1 inside div
// div.appendChild(h1);
// container.appendChild(div);

// const container=document.getElementById('section-container');
// const div=document.createElement('div');
// const h1=document.createElement('h1');
// h1.innerText='Exploring dynamic js'
// div.appendChild(h1);
// container.appendChild(div);

// document.getElementById('att-container').setAttribute('class','myClass ')
// document.getElementById('att-container').setAttribute('value','myValue ')
// const MyAttAtiBute= document.getElementById('att-container').getAttribute('id')
// console.log(MyAttAtiBute);

const value=document.getElementById('htmlContainer');
console.log(value.innerHTML);

