// Seleccionar codigo HTML

// querySelector es un método de JavaScript que permite seleccionar un único elemento del DOM utilizando selectores CSS. A diferencia de getElementById, que se basa en el atributo id único de un elemento, querySelector utiliza cualquier selector CSS válido para identificar un elemento. Este devuelve 0 o 1 elementos.
// su sintaxis var elemento = document.querySelector("selectorCSS"); se compone de una variable, un elemento, la palabra clave document (obligatoria para selectores), el . para acceder a objetos, el tipo de selector querySelector y como parametro el elemento a usar para seleccionar, en este caso "selectorCSS" es un selector CSS que identifica el elemento que deseas seleccionar

const heading = document.querySelector(".header__texto h2")
heading.textContent = "Nuevo Heading"; // textContent modifica con JS el texto del heading seleccionado
console.log(heading);


// querySelectorAll es un método de JavaScript que permite seleccionar múltiples elementos del DOM utilizando selectores CSS. A diferencia de querySelector, que selecciona solo el primer elemento que coincide con el selector, querySelectorAll devuelve todos los elementos que coinciden con el selector en una lista, conocida como NodeList. Aunque se asemeja a un arreglo, no es exactamente un arreglo, lo que significa que no tiene los mismos métodos y propiedades que un arreglo, como map, forEach o length. Sin embargo, puedes iterar sobre una NodeList utilizando un bucle for o convertirla en un arreglo usando Array.from() o el operador de propagación (...).
// su sintaxis var elementos = document.querySelectorAll("selectorCSS"); es igual a la del querySelector, se agrega el All al final


const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces[0]); // al igual que los arreglo, podemos acceder al NodeList con index, siendo [0] el primer elemento de la lista

enlaces[0].textContent = "Nuevo texto para enlaces"; // textContent modifica con JS el texto del enlace [0] seleccionado
enlaces[0].href = "https://google.com"; // href modifica con JS el enlace de destino del enlace [0] seleccionado
enlaces[0].classList.add("nueva-clase"); // classList.add agrega con JS una clase nueva al enlace [0] seleccionado
// enlaces[0].classList.remove("navegacion__enlace"); // classList.remove elimina con JS una clase al enlace [0] seleccionado


// getElementById es un método de JavaScript que se utiliza para seleccionar un único elemento del DOM mediante su atributo id. Dado que los IDs deben ser únicos en una página web, este método se utiliza para acceder rápidamente a un elemento específico.
// su sintaxis var elemento = document.getElementById("idDelElemento"); donde "idDelElemento" es el valor del atributo id del elemento que deseas seleccionar.

const heading2 = document.getElementById("heading");
console.log(heading2);

// Crear un nuevo enlac: con createElemen() puedes crear elementos HTML con atributos y contenido. Su sintaxis es la siguiente: document.createElement(tagName); donde tagName es una cadena que especifica el nombre del elemento HTML que deseas crear, como "DIV", "P", "A", "IMG", etc.

const nuevoEnlace = document.createElement('A')

// Agregar el HREF

nuevoEnlace.href = 'nuevo-enlace.html'; // a href="nosotros.html"

// Agregar TEXTO

nuevoEnlace.textContent = 'Tienda Virtual'; // <a href="nosotros.html" class="nuevo--enlace">Nosotros</a>

// Agregar CLASE

nuevoEnlace.classList.add('navegacion__enlace'); // <a href="nosotros.html" class="nuevo--enlace"

// Agregar AL DOCUMENTO

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

// EVENTOS: son acciones o sucesos que ocurren en el navegador web, como la interacción del usuario con la página, cambios en el estado de la página, o respuestas a ciertas condiciones. Los eventos permiten que una página web sea interactiva y responda a las acciones del usuario.
//Un evento puede ser cualquier cosa, desde hacer clic en un botón, mover el mouse sobre un elemento, presionar una tecla en el teclado, hasta cambiar el tamaño de la ventana del navegador. Cuando ocurre un evento, se genera un objeto de evento que contiene información sobre el evento en sí, como el tipo de evento, el objetivo del evento (el elemento HTML al que se aplicó el evento) y otros datos relevantes.
//Para manejar eventos en JavaScript, se utilizan los llamados "manejadores de eventos". Estos son fragmentos de código que se ejecutan cuando un evento específico ocurre en un elemento HTML. Los manejadores de eventos permiten que el código JavaScript reaccione y realice acciones en función de la interacción del usuario.

// console.log(1);

// window.addEventListener('load', function(){
//     console.log(2);
// }); // es un método que se utiliza en JavaScript para adjuntar un manejador de eventos a un elemento HTML. Este método permite que el código JavaScript responda a eventos específicos que ocurren en ese elemento. LOAD espera a que JS y los archivos de HTML esten listos

// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { // Solo espera a que se descarge el HTML
//     console.log(4);
// });

// console.log(5);

// window.onscroll = function() {
//     console.log('scrolling...');
// }

// Seleccionar Elementos y Asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento) { // El click esta asociado al BOTON y se puede usar en cualquier elemento
//     console.log(evento);
//     evento.preventDefault(); // se usa generalmente dentro del manejador de eventos para prevenir el comportamiento predeterminado del navegador asociado con ese evento específico.

//     //Validar Formulario

//     console.log('Enviar Formulario');
// })


// Eventos de los Imputs y Textarea

const datos = { // objeto global
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); // Evento submit

nombre.addEventListener('input',  leerTexto) // change permite ver el evento una vez finalizado. Input permite ver el evento en ejecucion
email.addEventListener('input',  leerTexto)
mensaje.addEventListener('input', leerTexto)

// Evento SUBMIT
formulario.addEventListener('submit', function(evento){ // El submit esta asociado al FORMULARIO
    evento.preventDefault();

    // Validar el Formulario

    const { nombre, email, mensaje } = datos; // destructuring

    if(nombre === '' || email === '' || mensaje === '' ){
        mostrarAlerta('Todos los campos son obligatorios', 'error');

        return; // corta la ejecucion del codigo hasta el fin del IF
    }

    // Enviar el Formulario - Crear alerta
    mostrarAlerta('Mensaje enviado correctamente');
})

function leerTexto(evento) { // aplicamos la funcion por fuera para anidarla a los eventos de arriba. Evitamos duplicar codigo
    // console.log(evento.target.value) // .target me arroja el ID sobre el cual trabajo y .value me da el valor en ejecucion

    datos[evento.target.id] = evento.target.value;

    // console.log(datos);
} 

// // Mostrar mensaje de ERROR en pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');

//     formulario.appendChild(error);

//     // Desaparecer alerta de error
//     setTimeout(() => {
//         error.remove();
//     }, 5000);
// }


// // Mostrar mensaje de CORRECTO en pantalla

// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('P');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');

//     formulario.appendChild(alerta);

//     // Desaparecer alerta de mensaje
//     setTimeout(() => {
//         alerta.remove();
//     }, 5000);
// }

// Aplicando Refactoring. s una técnica utilizada en desarrollo de software para mejorar la estructura, el diseño y la legibilidad del código sin cambiar su funcionalidad externa. En esencia, es el proceso de reorganizar y reescribir porciones de código existente con el objetivo de hacerlo más eficiente, mantenible y comprensible, sin alterar su comportamiento observable para los usuarios finales. La refactorización es una práctica fundamental en el desarrollo de software porque ayuda a mantener el código base en un estado saludable y evita la acumulación de deudas técnicas. Al realizar refactorizaciones regulares, los equipos de desarrollo pueden reducir la complejidad, facilitar la colaboración entre miembros del equipo y acelerar el proceso de resolución de problemas y desarrollo de nuevas características. Sin embargo, es importante llevar a cabo refactorizaciones con cuidado y pruebas adecuadas para asegurarse de que los cambios no introduzcan errores inadvertidos en el código. Podemos hablar de RENOMBRAR, REORGANZAR, ELIMINAR DUPLICADOS, SIMPLIFICAR, OPTIMIZAR, MEJORAR LEGIBILIDAD


// Refactorizamos las funciones mostrarError y mostrarMensaje en una sola, menos codigo, mas legible, optimizamos

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparecer alerta de mensaje
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}