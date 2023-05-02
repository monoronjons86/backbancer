let count=0;
document.getElementById('input-btn').addEventListener('click',function(){
    count+=1;
    const myInputValue=document.getElementById('input-value');
    const myInput=myInputValue.value ;
    myInputValue.value='';

    const parent=document.getElementById('content-contaniner');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${count}</td>
    <td>${myInput}</td>
    <td>
    <button class='btn btn-danger DeleteBtn'>Delete</button>
    <button class='btn btn-primary'>Done</button>
    </td>

    `
    parent.appendChild(tr);
    const elements= document.querySelectorAll('.DeleteBtn')
   for(const value of elements){
    value.addEventListener('click',function(){
        console.log('delete button clicked')
    })
    }

});
