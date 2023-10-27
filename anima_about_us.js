window.addEventListener("scroll", function() {
    var aboutFeatures = document.querySelector(".about-features");
    var aboutFeaturesPosition = aboutFeatures.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
  
    if (aboutFeaturesPosition < screenPosition) {
      aboutFeatures.classList.add("visible");
    }
  });

const Contenedor = document.getElementById("containerMenu");
const Titulo = Contenedor.querySelector('.section-title');
const Productos = Contenedor.querySelector('.slider-wrapper');
const MenuInfo = document.getElementById('descripcionMenu');
const MenuImagen = document.getElementById('imagenProducto')
const Boton1 = document.getElementById("abrirMenu1");
const Boton2 = document.getElementById("abrirMenu2");
const Boton3 = document.getElementById("abrirMenu3");
const Boton4 = document.getElementById("abrirMenu4");
const Boton5 = document.getElementById("abrirMenu5");
const Boton6 = document.getElementById("abrirMenu6");
const BotonAgregarProductos = document.getElementById('AgregarProductos')
const ContenedorProductos = document.getElementById('ContenedorProductos')
const ContenedorAgregar = document.querySelector('.AgregarProdtosUi')

Boton1.addEventListener('click', abrirMenus)
Boton2.addEventListener('click', abrirMenus)
Boton3.addEventListener('click', abrirMenus)
Boton4.addEventListener('click', abrirMenus)
Boton5.addEventListener('click', abrirMenus)
Boton6.addEventListener('click', abrirMenus)


function abrirMenus(){
  Contenedor.style.height = '500px'
  Titulo.style.transform = 'translateY(-100px)'
  Productos.style.transform = 'translateY(500px)'
  MenuInfo.style.transform = 'translateY(410px)'
  MenuInfo.style.transition = 'all 1.7s'
  MenuInfo.style.visibility = 'visible'
  MenuImagen.style.transform = 'translateY(410px)'
  MenuImagen.style.transition = 'all 1.7s'
  MenuImagen.style.visibility = 'visible'
  BotonAgregarProductos.style.transform = 'translateY(100px)'
  BotonAgregarProductos.style.transition = 'all 1s'
}

const BotonVolver = document.getElementById('botonVolver')
const BotonVolver1 = document.getElementById('botonVolver1')

BotonVolver.addEventListener('click', function(){
  Contenedor.style.height = '510px'
  Titulo.style.transform = 'translateY(0px)'
  Productos.style.transform = 'translateY(0px)'
  MenuInfo.style.transform = 'translateY(-100px)'
  MenuInfo.style.transition = 'all 0.5s'
  MenuInfo.style.visibility = 'hidden'
  MenuImagen.style.transform = 'translateY(-410px)'
  MenuImagen.style.transition = 'all 0.5s'
  MenuImagen.style.visibility = 'hidden'
  BotonAgregarProductos.style.transform = 'translateY(0px)'
  BotonAgregarProductos.style.transition = 'all 1.3s'
})

BotonVolver1.addEventListener('click', function(){
  ContenedorProductos.style.visibility = 'visible'
  Titulo.style.transform = 'translateY(0px)'
  Titulo.style.transition = 'all 1.7s'
  ContenedorProductos.style.transform = 'translateY(0px)'
  ContenedorProductos.style.transition = 'all 1s'
  ContenedorAgregar.style.visibility = 'hidden'
  ContenedorAgregar.style.transform = 'translateY(0px)'
  ContenedorAgregar.style.transition = 'all 1s'
  BotonAgregarProductos.style.transform = 'translateY(0px)'
  BotonAgregarProductos.style.transition = 'all 2s'
})

BotonAgregarProductos.addEventListener('click', function(){
  ContenedorProductos.style.visibility = 'hidden'
  Titulo.style.transform = 'translateY(-100px)'
  Titulo.style.transition = 'all 1s'
  ContenedorProductos.style.transform = 'translateY(800px)'
  ContenedorProductos.style.transition = 'all 1s'
  ContenedorAgregar.style.visibility = 'visible'
  ContenedorAgregar.style.transform = 'translateY(510px)'
  ContenedorAgregar.style.transition = 'all 1s'
  BotonAgregarProductos.style.transform = 'translateY(100px)'
  BotonAgregarProductos.style.transition = 'all 1s'
})
