//El factorial de un número es igual al producto de todos los números enteros positivos desde el 1 hasta dicho número.
//Ejemplo: 4! = 1 x 2 x 3 x 4 = 24.

/*

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
*/


const form = document.querySelectorAll('.formulario');
let resultado = document.getElementById('resultado');
let btn = document.getElementById('btn');

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    let input = document.getElementById('numero').value; 
    let inputNum = parseInt(input);
    resultado.innerHTML = main(inputNum);
    
});
function factorial(number) {
    let factor = 1;
    for(let i= 1; i <= number; i++){
        factor *= i;
    }
    return factor;
}

let main =(date) => !isNaN(date) ?  factorial(date) : resultado.innerText = 'Ingresa un numero, por favor';
   
    





