document.getElementById('btn-family').addEventListener('click',function(){
   const review= document.getElementById('first-text');
   const MoreReview=review.value;
   review.value=' ';
   
   const p=document.createElement('p');
   p.innerText=MoreReview;

   const textExplore=document.getElementById('text-explore')
   textExplore.appendChild(p);


});