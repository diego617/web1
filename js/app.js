const ul = document.querySelector('ul');
const a = document.querySelectorAll('a');

for(let i = 0; i < a.length; i++){
    //console.log(e.target.parentElement.parentElement);
    a[i].onmouseover = function(e){
        e.target.style.color = '#ccc';
    };
    a[i].onmouseout = function(e){
        e.target.style.color = '';
    };
}

