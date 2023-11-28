
function cambiaColore(){

    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);

    let colore = "rgb(" + r + "," + g + "," + b + ")";
    
    document.getElementById("p1").style.color = colore;
    document.getElementById("p2").style.color = colore;
    document.getElementById("p3").style.color = colore;
    

}

function grassetto() {  
    
    let paragrafi = document.getElementById("paragrafi").style.fontWeight = "bold";

    for (let i = 0; i < paragrafi.length; i++) {
        paragrafi[i].style.fontWeight = "bold";
    }
   
}
    
function scomparsa() {
    
    let scomparsa = document.getElementById("paragrafi").style.display = "none";
    
    for (let i = 0; i < scomparsa.length; i++) {
        scomparsa[i].style.display = "none";
    }
    
}
