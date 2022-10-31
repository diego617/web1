const ul = document.getElementById('ul');
const menu = ['Incio','Productos','Blog','Contacto'];


for(const i in menu){
    const e = menu[i]
    ul.innerHTML += `<li><a>${e}</a></li>`;
}

