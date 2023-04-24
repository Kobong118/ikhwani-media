const ulListMenu = document.getElementsByClassName('mb-list-menu') ;
const qMbmaim = document.getElementsByClassName('konten');
if (qMbmaim.length !=0) {
    for (let i = 0; i < qMbmaim.length; i++) {
        let item = document.createElement('li');
        let aItem = document.createElement('a');
        item.setAttribute("class",`list${i}`);
        qMbmaim[i].setAttribute("id",`item${i}`);
        aItem.setAttribute("href",`#item${i}`);
        let listName = qMbmaim[i].getElementsByTagName("h1");
        aItem.innerHTML = listName[0].innerHTML;
        item.appendChild(aItem);
        ulListMenu[0].appendChild(item);
        
    }
}
const tombolMenu = document.getElementById('Tmenu');
const mbmenu = document.getElementsByClassName('mb-menu');
tombolMenu.onclick = () => {if (ulListMenu[0].hidden == true){
ulListMenu[0].hidden = false
}else if(ulListMenu[0].hidden == false){
    ulListMenu[0].hidden = true}
mbmenu[0].classList.toggle('hidden')
};
ulListMenu[0].onclick = ()=>{mbmenu[0].classList.toggle('hidden'); ulListMenu[0].hidden = true}