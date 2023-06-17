// tombol tampil atas menu
const tAppAtas = document.getElementById('TappAtas');
tAppAtas.onclick=()=>{
    let MA = document.getElementById('MenuAtas');
    MA.classList.toggle('show');
    setTimeout(() => {
        if(tAppAtas.getElementsByTagName('span')[0].innerHTML=='Aplikasi'){
            tAppAtas.getElementsByTagName('span')[0].innerHTML='Sembunyikan'  
        }else{
            tAppAtas.getElementsByTagName('span')[0].innerHTML='Aplikasi'
        };
    }, 3000);
    
};