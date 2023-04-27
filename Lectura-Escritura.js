// LEER EL HTML
 const h1 = document.querySelector('h1');
 const h2 = document.querySelector('h2');
 const p = document.querySelectorAll('p');
 const parrafito = document.querySelector('.parrafito');
 const pid = document.querySelector('#pid');
const span = document.getElementsByClassName('texto')
 const input = document.querySelector('input');

 console.log(input.value)
 console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
    span
 })

//  ESCRIBIR EL HTML

h1.innerHTML = 'YO CAMBIE <br> EL TITULO';
h2.innerText = 'YO CAMBIE <br> EL TITULO';
const atributo = h1.getAttribute('class')
console.log(atributo);
h1.setAttribute('class','red');
h1.classList.add('azul');
h1.classList.remove('red');
h2.classList.toggle('color');
console.log(h2.classList.contains('color'));

// input.placeholder = 'hola mundo';
// input.value='12345';
// input.setAttribute('value','marlon')

    const img = document.createElement('img');
    img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
    console.log(img);
    pid.append(img);
    console.log(img);