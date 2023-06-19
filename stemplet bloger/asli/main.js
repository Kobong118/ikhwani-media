// tombol tampil atas menu
const tAppAtas = document.querySelector('#TappAtas');
tAppAtas.onclick=()=>{
    document.querySelector('#MenuAtas').classList.toggle('show');
    document.querySelector('.atas-menu-item').classList.toggle('show2');
    setTimeout(()=>{
        tAppAtas.classList.toggle('nyala')
    },300)
    
};