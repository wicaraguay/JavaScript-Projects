// esto agregar a la pantalla el valor del boton de la caculadora
function agregar(valor){
    document.getElementById("pantalla").value += valor;
}


// Esta funcion borra la pantalla
function borrar (){
    document.getElementById("pantalla").value = "";
}

// esta funcion calcular el resultado de las opreaciones 
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById("pantalla").value = resultado;
}