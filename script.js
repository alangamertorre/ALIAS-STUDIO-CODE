//----------------------------
// DOM
//----------------------------
const barra3 = document.querySelector('.barra3');
const margen2 = document.querySelector('.margen2');
const crearPestana = document.querySelector('.crear-pestaña');
const limpiarPestana = document.querySelector('.limpiar-pestaña');

//----------------------------
// Función crear nueva pestaña
//----------------------------
function crearNuevaPestana() {
  // Crear pestaña
  const nuevaPestana = document.createElement("div");
  nuevaPestana.className = "pestaña";

  // Botón cerrar
  const btnCerrar = document.createElement("div");
  btnCerrar.className = "BtnPestaña";

  // Texto
  const texto = document.createElement("span");
  texto.textContent = "Nueva Pestaña";

  // Icono
  const icono = document.createElement("div");
  icono.className = "iconoNPestaña";

  // Montar estructura
  nuevaPestana.appendChild(btnCerrar);
  nuevaPestana.appendChild(texto);
  nuevaPestana.appendChild(icono);

  // Insertar en barra
  barra3.insertBefore(nuevaPestana, margen2);

    
    
    // Animación entrada
        anime({
          targets: nuevaPestana,
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 150,
          easing: 'easeInQuad'

        });
  // Evento cerrar
  btnCerrar.addEventListener("click", (e) => {
    e.stopPropagation();

      anime({
          targets: nuevaPestana,
          translateX: - (nuevaPestana.offsetWidth + 50),
          opacity: 0,
          duration: 300,
          easing: 'easeInOutQuad',
      complete: () => {
          nuevaPestana.remove();
          anime({
              targets: '.pestaña',
              translateX: - (nuevaPestana.offsetWidth),
              duration: 300,
              easing: 'easeInOutQuad' 
        });
      }
    });
  });
}

//----------------------------
// Evento crear pestaña
//----------------------------
crearPestana.addEventListener("click", crearNuevaPestana);
crearPestana.addEventListener("keydown", (e) => {
  if (e.key === "ctrl + t" || e.key === " ") {
    e.preventDefault();
    crearNuevaPestana();
  }
});

//----------------------------
// Limpiar todas las pestañas
//----------------------------
let animacionLimpiar = false; 

limpiarPestana.addEventListener("click", () => {
  if (animacionLimpiar) return;
  animacionLimpiar = true;

  const pestañas = document.querySelectorAll(".pestaña");

  // Animar todas las pestañas
  anime({
    targets: pestañas,
    translateX: function(p) {
      return - (p.offsetWidth + 50);
    },
    opacity: 0,
    duration: 400,
    easing: 'easeInOutQuad',
    complete: () => {
      // Eliminar todas
      pestañas.forEach(p => p.remove());
      animacionLimpiar = false;
    }
  });
});