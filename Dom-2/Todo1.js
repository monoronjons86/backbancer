document.getElementById('input-btn').addEventListener('click',function(){
    const myInputValue=document.getElementById('input-value').value;

    const parent=document.getElementById('content-contaniner');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>1</td>
    <td>${myInputValue}</td>
    <td>
    <button>Delete</button>
    <button>Done</button>
    </td>

    `
    parent.appendChild(tr);

});