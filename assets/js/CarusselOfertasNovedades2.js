//Funcion para hacer que el carrusde ofertas y novedades se muevan las tarjetas de izquierda a derecha o de derecha a izquierda
function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};
//Funcion para el movimiento 
App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('.slick-track');
    const slick = track.querySelectorAll('.slick');


    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}
// funcion del boton de izq que hace que las cartas se deslizen de izquierda a derecha
let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}
// funcion del boton de der que hace que las cartas se deslizen de derecha a izquierda
let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}
//Funcionalidad en Ofertas para que de una tarjeta se replica las veces que un producto se agregue.
function addItem(item){
    const itemHTML = '<div class="slick">\n' +
    '<div class="card">\n' +
        '<div class="card-img"><img src = "'+ item.img +'" id = "imgOferta"></div>\n' + 
        '<div class="card-info">\n' + 
            '<p class="text-title">'+ item.name + '</p>\n' +
            '<p class="text-body">' + item.description + '</p>\n' +
        '</div>\n' +
        '<div class="card-footer">\n' +
            '<span class="text-title">$499.49</span>\n'+
        '</div>\n'+
    '</div>\n'+
'</div>\n';
//Mando la tarjeta por defecto al HTML en el div con el id track
    const itemsContainer = document.getElementById("track");
    itemsContainer.innerHTML += itemHTML; 
}

//Funcionalidad en Novedades para que de una tarjeta se replica las veces que un producto se agregue.
function addItem2(item){
  const itemHTML = '<div class="slick">\n' +
  '<div class="card">\n' +
      '<div class="card-img"><img src = "'+ item.img +'" id = "imgOferta"></div>\n' + 
      '<div class="card-info">\n' + 
          '<p class="text-title">'+ item.name + '</p>\n' +
          '<p class="text-body">' + item.description + '</p>\n' +
      '</div>\n' +
      '<div class="card-footer">\n' +
          '<span class="text-title">$499.49</span>\n'+
      '</div>\n'+
  '</div>\n'+
'</div>\n';
//Mando la tarjeta por defecto al HTML en el div con el id track2
  const itemsContainer2 = document.getElementById("track2");
  itemsContainer2.innerHTML += itemHTML;
}

//Funcionalidad en Ofertas para que de una tarjeta se replica las veces que un producto se agregue.
function addItem3(item){
  const itemHTML = '<div class="slick">\n' +
  '<div class="item1">\n'+
  '<button class="categorias">\n'+item.name+
  '<br>\n'+
  '<img class="iconC" src="'+item.img+'" alt="">\n'+
  '</button>\n'+
  '</div>\n';
//Mando la tarjeta por defecto al HTML en el div con el id track
  const itemsContainer3 = document.getElementById("track3");
  itemsContainer3.innerHTML += itemHTML; 
}

//Funcionalidad en Novedades para que de una tarjeta se replica las veces que un producto se agregue.
function addItem4(item){
const itemHTML = '<div class="slick">\n' +
'<div class="item1">\n'+
'<button class="categorias">\n'+item.name+
'<br>\n'+
'<img class="iconC" src="'+item.img+'" alt="">\n'+
'</button>\n'+
'</div>\n';
//Mando la tarjeta por defecto al HTML en el div con el id track2
const itemsContainer4 = document.getElementById("track4");
itemsContainer4.innerHTML += itemHTML;
}

// Listado de productos de Categorias 1
addItem3({'name':'Electrodomésticos',
  'img':'assets/icons/electrodomesticos2.png'});
addItem3({'name':'Tecnología',
  'img':'assets/icons/tecnologia2.png'});
addItem3({'name':'Hogar y Muebles',
  'img':'assets/icons/muebles2.png'});
addItem3({'name':'Moda',
  'img':'assets/icons/moda2.png'});
addItem3({'name':'Deportes y Fitness',
  'img':'assets/icons/deportes2.png'});
addItem3({'name':'Herramientas',
  'img':'assets/icons/herramientas2.png'});

  // Listado de productos de Categorias 2
addItem4({'name':'Belleza y Cuidado personal',
  'img':'assets/icons/belleza2.png'});
addItem4({'name':'Inmuebles',
  'img':'assets/icons/inmuebles2.png'});
addItem4({'name':'Construcción',
  'img':'assets/icons/construccion2.png'});
addItem4({'name':'Oficinas',
  'img':'assets/icons/oficina2.png'});
addItem4({'name':'Juegos y juguetes',
  'img':'assets/icons/juguetes2.png'});
addItem4({'name':'Bebes',
  'img':'assets/icons/bebe2.png'});

// Listado de productos de Ofertas
addItem({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItem({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'});

    addItem({
        name: "Lavadora LG",
        img: "https://www.lg.com/cac/images/lavadoras-y-secadoras/md05898276/2_Gallery/N01_medium01.jpg",
        description:
          "14/10kg Lavadora Doble Tina, Filtro de Pelusa, Rejilla Anti-Readores, Color Blanco",
      });
      addItem({
        name: "Refrigerador Samsung",
        img: "https://www.costco.com.mx/medias/sys_master/products/h94/h23/79611664564254.webp",
        description: "22 French Door",
      });
      addItem({
        name: "Refrigerador Samsung",
        img: "https://images.samsung.com/is/image/samsung/mx-side-by-side-rs27t5561s9-rs27t5561s9-em-frontgray-207487013?$PD_GALLERY_L_JPG$",
        description:
          "Side by Side 27 cu.ft con Family Hub y despachador de agua y hielo",
      });
      addItem({
        name: "Banca para Jardín",
        img: "https://cdn1.coppel.com/images/catalog/pm/3665443-1.jpg",
        description: "Banca para Jardín Congo Delia",
      });
      addItem({
        name: "Juego de jardin",
        img: "https://cdn1.coppel.com/images/catalog/pm/3487413-1.jpg",
        description: "Juego de Jardín Apollo con 2 Sillas",
      });
      addItem({
        name: "Mesa Rectangular",
        img: "https://cdn1.coppel.com/images/catalog/pm/3406343-1.jpg",
        description: "Mesa Rectangular Congo Ibiza II",
      });
      addItem({
        name: "Alberca Rectangular",
        img: "https://cdn1.coppel.com/images/catalog/pm/5480733-1.jpg",
        description: "Intex 2282 L 260 x 160 x 65 cm",
      });
      addItem({
        name: "AT&T",
        img: "https://cdn1.coppel.com/images/catalog/pm/2512073-1.jpg",
        description: "Unefon Motorola Edge 20 Pro 256 GB Blanco",
      });
      addItem({
        name: "Consola",
        img: "https://cdn1.coppel.com/images/catalog/pm/2889483-1.jpg",
        description: "Consola Xbox Series X 1 TB",
      });
      addItem({
        name: "Consola",
        img: "https://cdn1.coppel.com/images/catalog/pm/2889313-1.jpg",
        description: "Consola Xbox Series S 512 GB",
      });
      addItem({
        name: "Leche Lala",
        img: "https://www.chedraui.com.mx/medias/7501020550986-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mzk0MjB8aW1hZ2UvanBlZ3xoMTYvaDk5LzEyMDI3MDc2NzcxODcwLmpwZ3xmMjEwZDU0NWZiNmQ0ZmM1NmFlNjA3ZDA3MzdmNmY4ZjdhZTJmNjQ4ZjI2MjFkZWRhNzM1YmViOWM4ZjAyZjBh",
        description: "100 Sin Lactosa Proteína 1 L",
      });
// Listado de productos de Novedades
addItem2({'name':'juice',
    'img':'https://www.gs1india.org/media/Juice_pack.jpg',
    'description':'Orange and Apple juice fresh and delicious'});

addItem2({'name':'Tayto',
    'img':'https://www.irishtimes.com/polopoly_fs/1.4078148!/image/image.jpg',
    'description':'Cheese & Onion Chips'});

    addItem2({
        name: "Lavadora LG",
        img: "https://www.lg.com/cac/images/lavadoras-y-secadoras/md05898276/2_Gallery/N01_medium01.jpg",
        description:
          "14/10kg Lavadora Doble Tina, Filtro de Pelusa, Rejilla Anti-Readores, Color Blanco",
      });
      addItem2({
        name: "Refrigerador Samsung",
        img: "https://www.costco.com.mx/medias/sys_master/products/h94/h23/79611664564254.webp",
        description: "22 French Door",
      });
      addItem2({
        name: "Refrigerador Samsung",
        img: "https://images.samsung.com/is/image/samsung/mx-side-by-side-rs27t5561s9-rs27t5561s9-em-frontgray-207487013?$PD_GALLERY_L_JPG$",
        description:
          "Side by Side 27 cu.ft con Family Hub y despachador de agua y hielo",
      });
      addItem2({
        name: "Banca para Jardín",
        img: "https://cdn1.coppel.com/images/catalog/pm/3665443-1.jpg",
        description: "Banca para Jardín Congo Delia",
      });
      addItem2({
        name: "Juego de jardin",
        img: "https://cdn1.coppel.com/images/catalog/pm/3487413-1.jpg",
        description: "Juego de Jardín Apollo con 2 Sillas",
      });
      addItem2({
        name: "Mesa Rectangular",
        img: "https://cdn1.coppel.com/images/catalog/pm/3406343-1.jpg",
        description: "Mesa Rectangular Congo Ibiza II",
      });
      addItem2({
        name: "Alberca Rectangular",
        img: "https://cdn1.coppel.com/images/catalog/pm/5480733-1.jpg",
        description: "Intex 2282 L 260 x 160 x 65 cm",
      });
      addItem2({
        name: "AT&T",
        img: "https://cdn1.coppel.com/images/catalog/pm/2512073-1.jpg",
        description: "Unefon Motorola Edge 20 Pro 256 GB Blanco",
      });
      addItem2({
        name: "Consola",
        img: "https://cdn1.coppel.com/images/catalog/pm/2889483-1.jpg",
        description: "Consola Xbox Series X 1 TB",
      });
      addItem2({
        name: "Consola",
        img: "https://cdn1.coppel.com/images/catalog/pm/2889313-1.jpg",
        description: "Consola Xbox Series S 512 GB",
      });
      addItem2({
        name: "Leche Lala",
        img: "https://www.chedraui.com.mx/medias/7501020550986-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mzk0MjB8aW1hZ2UvanBlZ3xoMTYvaDk5LzEyMDI3MDc2NzcxODcwLmpwZ3xmMjEwZDU0NWZiNmQ0ZmM1NmFlNjA3ZDA3MzdmNmY4ZjdhZTJmNjQ4ZjI2MjFkZWRhNzM1YmViOWM4ZjAyZjBh",
        description: "100 Sin Lactosa Proteína 1 L",
      });

      $(document).ready(function(){
        $('.card').hover(function() {
            $(this).addClass('transition');
        }, function() {
            $(this).removeClass('transition');
        });
    });