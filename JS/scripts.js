let contador = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    correImagem();
}, 5000);

function correImagem(){
    contador++;
    if(contador > 4){
        contador = 1;
    }
    document.getElementById('radio'+contador).checked = true;
}