let count=0;
document.getElementById('btn-primary').addEventListener('click',function(){
    count+=1;
    const btnPrimary=document.getElementById('counter');
    const btnSum=btnPrimary.innerText;
    btnPrimary.innerText=count;

});
document.getElementById('btn-danger').addEventListener('click',function(){
    count-=1;
    const btnDanger=document.getElementById('counter');
    const btnMinus=btnDanger.innerText;
    btnDanger.innerText=count;

});