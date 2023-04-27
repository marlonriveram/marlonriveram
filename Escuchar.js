const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calcular1');
const input2 = document.querySelector('#calcular2');
const buttom = document.querySelector('#btn-calcular');
const pResultado = document.querySelector('#resultado');
form.addEventListener('submit', (sumatInputvalues));

 function sumatInputvalues (event){
    console.log(event);
    event.preventDefault();
  const suma = Number(input1.value) + Number(input2.value);
  pResultado.innerText=` Resultado: ${suma}`;
 };