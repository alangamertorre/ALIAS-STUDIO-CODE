//////////////////////////
// DOM PRINCIPAL /////////
//////////////////////////
const barra = document.querySelector('.barra');
const txt_barra = document.querySelector('.txt-barra');
const logo = document.querySelector('.logo-barra');
const caja_txt_barra = document.querySelector('.caja-txt');
const zona_presentacion = document.querySelector('.zona-presentacion');
const lado_izquierdo = document.querySelector('.lado-izquierdo');
const palabras_flotantes1 = document.querySelector('.palabras-flotantes1');
const palabras_flotantes2 = document.querySelector('.palabras-flotantes2');
const palabras = document.querySelectorAll('.palabra');

const palabrasArray = Array.from(palabras_flotantes1.children);
const palabrasConj = document.querySelectorAll('.palabra, .palabras-flotantes1, .palabras-flotantes2');

const video1 = document.querySelector('.video1');
const txt_presentacion = document.querySelector('.txt-presentacion');
const txt_inicio = document.querySelector('.txt-inicio');
const txt_productos = document.querySelector('.txt-productos');
const txt_soporte = document.querySelector('.txt-soporte');
const txt_acerca = document.querySelector('.txt-acerca');
const txt_noticias = document.querySelector('.txt-noticias');
const titulo_presentacion = document.querySelector('.txt-presentacion1');
const titulo_presentacion2 = document.querySelector('.txt-presentacion2');

const presentacion = document.querySelectorAll('.txt-presentacion1, .txt-presentacion2');
    

// Arreglo bug txt_presentación
txt_presentacion.style.transform = "translate(-50%, -50%)";

//////////////////////////
// ANIMACIONES ///////////
//////////////////////////
    // Animación de entrada

if (barra || txt_barra || logo || caja_txt_barra || zona_presentacion || lado_izquierdo || palabras_flotantes1 || palabras.length
    || txt_presentacion || txt_inicio || txt_productos || txt_soporte || txt_acerca || txt_noticias) {
        const targets = [];
        if (barra) targets.push(barra);
        if (txt_barra) targets.push(txt_barra);
        if (logo) targets.push(logo);
        if (caja_txt_barra) targets.push(caja_txt_barra);
        if (zona_presentacion) targets.push(zona_presentacion);
        if (lado_izquierdo) targets.push(lado_izquierdo);
        if (palabras_flotantes1) targets.push(palabras_flotantes1);
        if (palabras_flotantes2) targets.push(palabras_flotantes2);
        if (palabras && palabras.length) palabras.forEach(p => targets.push(p));
        if (txt_presentacion) targets.push(txt_presentacion);
        if (txt_inicio) targets.push(txt_inicio);
        if (txt_productos) targets.push(txt_productos);
        if (txt_soporte) targets.push(txt_soporte);
        if (txt_acerca) targets.push(txt_acerca);
        if (txt_noticias) targets.push(txt_noticias);


        anime({
            targets: targets,
            translateY: [-150, 0],  // empieza más arriba para que se vea la animación
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        });
        
        anime({
            targets: video1,
            opacity: [0, 1],
            duration: 1500,
            easing: 'easeOutExpo'
        });
    
        anime({
            targets: presentacion,
            translateY: [50, 0],  
            opacity: [0, 1],
            duration: 800,
            delay: anime.stagger(170, { start: 500 }), // cada palabra aparece con un retraso
            easing: 'easeOutExpo',
        });
    // Animación de palabras flotantes
        //Randomizador de palabras flotantes
        for (let i = palabrasArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            palabras_flotantes1.appendChild(palabrasArray[j]);
            palabrasArray.splice(j, 1);
        }
        //Ramdomizador de animación
        let delay1 = Math.random() * 2000 + 1500; 
        let posX = Math.random() * 100 + 50;
        
    function randomAni() { 
        delay1 = Math.random() * 2000 + 1500;
        posX = Math.random() * 200 + 50;
    }
    //Animacion de palabras flotantes
    if (palabras && palabras.length) {
        anime({
            targets: palabras,
            opacity: [
                { value: [0, 1], duration: 1250 },
                { value: [1, 0], duration: 1250 }  
            ],
            textShadow: [
                { value: '0 0 2px #fff, 0 0 5px #fff', duration: 1250 },
                { value: '0 0 5px #fff, 0 0 10px #fff', duration: 1250 }
            ],
            easing: 'easeInOutSine',
            loop: true,
            delay: anime.stagger(delay1, { start: 2000 }),
            complete: function() {
                randomAni();
                palabras.style.left = posX + 'px';
            }
        });
    }
}




