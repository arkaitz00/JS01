function esPar(){
    var x = prompt("Introduce numero entero");
    if(x%2===0){
        return alert("Es par");
    }else{
        return alert("Es impar");
    }
}

function esPalindromo(){
    var texto = prompt("Introduce texto");
    texto = texto.toLowerCase();
    var cadena = texto.split("");
    var reverse = texto.split("").reverse();
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] === reverse[i]){
            return alert("Es palindromo");
        }else{
            return alert("No es palindromo");
        }        
    }
}

function botonPulsado(id){
    switch(id){
        case 'btn1':
            document.getElementById("lgnd1").innerHTML = "Se presiono el primer boton";
        break;
        case 'btn2':
            document.getElementById("lgnd1").innerHTML = "Se presiono el segundo boton";
        break;
        case 'btn3':
            document.getElementById("lgnd1").innerHTML = "Se presiono el tercer boton";
        break;
    }
}

function textoReves(){
    var frase = document.getElementById("p1").innerHTML;
    var fraseAlReves = frase.split("").reverse().join("");
    alert(fraseAlReves);
}