const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');
const color = true;
/*a.addEventListener('mouseover',()=>{
    //console.log(e.target);
    a.style.color= 'red';
});*/


for(let i = 0; i < a.length; i++){
    a[i].addEventListener('mouseover',(e)=>{
        //console.log(e.target.parentElement.parentElement);
        let aColor = e.target;
        if(color == true ){
            aColor.style.color = "green";
        }else{aColor.style.color = "";}
        
          
    });
}


