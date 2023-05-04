document.getElementById('add-btn').addEventListener('click',function(){
    const value=document.getElementById('text-input').value;
    document.getElementById('text-input').value='';
    const container=document.getElementById('parent-container');
    const li=document.createElement('li');
    li.innerText=value;
    li.classList.add('new-li')
    container.appendChild(li);
    const allList=document.getElementsByClassName('new-li');
    for(const item of allList){
        item.addEventListener('click',function(e){
            e.target.parentNode.removeChild(e.target)
        });
    }
});
document.getElementById('hit').addEventListener('click',function(){
setInnerText('p-1','bangladesh');
setInnerText('p-2','india');
setInnerText('p-3','pakistan');
setInnerText('p-4','canada');
const inputValue= getInputValue('text-input');
console.log(inputValue);

});
function setInnerText(id,value){
    document.getElementById(id).innerText='bangladesh'.innerText=value;

}
function getInputValue(id){
   const value= document.getElementById(id).value;
   return value;
}
