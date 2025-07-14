// === FUNCIÓN WHATSAPP ===
function enviarPorWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const nivel = document.getElementById("nivel").value;
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto = `Hola! Quiero inscribirme en la Escuela de Ministerio.%0A Nombre: ${nombre}%0A Email: ${email}%0A Nivel: ${nivel}%0A Mensaje: ${mensaje}`;

  const numero = "5491161836534";
  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
}

// === SLIDER FOTO POR FOTO ===
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");

  if (!slides.length || !btnPrev || !btnNext) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
  }

  btnPrev.addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });

  btnNext.addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  showSlide(current);
});

// === SLIDER VALORES IGLESIA ===
let valores = document.querySelectorAll(".valor-activo");
let indiceActual = 0;

function cambiarValor(direccion) {
  valores[indiceActual].style.display = "none";
  indiceActual = (indiceActual + direccion + valores.length) % valores.length;
  valores[indiceActual].style.display = "block";
}

// === FORMULARIO DE COMENTARIOS CON LOCALSTORAGE ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comentarioForm");
  const nombreInput = document.getElementById("nombreUsuario");
  const comentarioInput = document.getElementById("comentarioTexto");

  if (!form || !nombreInput || !comentarioInput) return;

  let lista = document.getElementById("comentariosGuardados");
  if (!lista) {
    lista = document.createElement("div");
    lista.id = "comentariosGuardados";
    lista.className = "lista-opiniones";
    form.parentElement.appendChild(lista); // lo agrega después del formulario
  }

  const testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];

  testimonios.forEach(({ nombre, comentario }) => {
    agregarTestimonio(nombre, comentario);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = nombreInput.value.trim();
    const comentario = comentarioInput.value.trim();

    if (!nombre || !comentario) return;

    agregarTestimonio(nombre, comentario);

    testimonios.push({ nombre, comentario });
    localStorage.setItem("testimonios", JSON.stringify(testimonios));

    form.reset();
  });

  function agregarTestimonio(nombre, comentario) {
    const div = document.createElement("div");
    div.classList.add("comentario");
    div.innerHTML = `<p>"${comentario}"</p><span>- ${nombre.toUpperCase()}</span>`;
    lista.appendChild(div);
  }
});

// === MODAL IMAGEN CON FLECHAS ===
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imagenModal");
  const modalImg = document.getElementById("imgAmpliada");
  const cerrar = document.querySelector(".cerrar");
  const imagenes = document.querySelectorAll(".img-popup");
  const btnAnterior = document.querySelector(".flecha.anterior");
  const btnSiguiente = document.querySelector(".flecha.siguiente");

  let indiceActual = 0;

  imagenes.forEach((img, index) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      indiceActual = index;
    });
  });

  cerrar.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  btnAnterior?.addEventListener("click", function (e) {
    e.stopPropagation();
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    modalImg.src = imagenes[indiceActual].src;
  });

  btnSiguiente?.addEventListener("click", function (e) {
    e.stopPropagation();
    indiceActual = (indiceActual + 1) % imagenes.length;
    modalImg.src = imagenes[indiceActual].src;
  });
});

// === AMPLIAR IMAGEN EN 'TU FAMILIA' ===
const modalFamilia = document.getElementById("imagenModal");
const imgAmpliada = document.getElementById("imgAmpliada");

if (modalFamilia && imgAmpliada) {
  document.querySelectorAll(".bloque img, .bloque-evento img").forEach(imagen => {
    imagen.addEventListener("click", () => {
      modalFamilia.style.display = "block";
      imgAmpliada.src = imagen.src;
    });
  });

  function cerrarModal() {
    modalFamilia.style.display = "none";
  }
} else {
  console.warn("Modal o imagen ampliada no encontrados en esta página.");
}

// === SLIDER NOVEDADES Y ACTIVIDADES ===
document.addEventListener("DOMContentLoaded", () => {
  const novedadesSlides = document.querySelectorAll(".slider-novedades .slide");
  const btnNovedadPrev = document.querySelector(".slider-novedades .prev");
  const btnNovedadNext = document.querySelector(".slider-novedades .next");

  if (!novedadesSlides.length || !btnNovedadPrev || !btnNovedadNext) return;

  let currentNovedad = 0;

  function mostrarNovedad(index) {
    novedadesSlides.forEach((slide) => slide.classList.remove("activo"));
    novedadesSlides[index].classList.add("activo");
  }

  btnNovedadPrev.addEventListener("click", () => {
    currentNovedad = (currentNovedad - 1 + novedadesSlides.length) % novedadesSlides.length;
    mostrarNovedad(currentNovedad);
  });

  btnNovedadNext.addEventListener("click", () => {
    currentNovedad = (currentNovedad + 1) % novedadesSlides.length;
    mostrarNovedad(currentNovedad);
  });

  mostrarNovedad(currentNovedad);
});
  









