let count=0;
document.getElementById('input-btn').addEventListener('click',function(){
    const myInputValue=document.getElementById('input-value').value;
    // console.log(myInputValue);
    count +=1;

    const parent=document.getElementById('content-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
     <button class="btn btn-danger DeleteBtn">Delete</button>
     <button class="btn btn-primary">Done</button>
    </td>
    `
    parent.appendChild(tr);
    document.getElementById('input-value').value=' ';

const elements=document.querySelectorAll('.DeleteBtn');
 console.log(elements)
  for(const value of elements)
  {
    value.addEventListener('click',function(event){
        event.target.parentNode.parentNode.style.display='none';
    });
  }
});
document.getElementById('clear-btn').addEventListener('click',function(e){
    // console.log(e.target.parentNode);
    e.target.parentNode.style.display='none';

});

