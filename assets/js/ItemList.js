
function res(){
    document.getElementById("resultado").innerHTML='<h2>'+localStorage.categoria+'</h2>';
};

res();

let productos = [
{
    categoria:'Electrodomésticos',
    name: "Lavasecadora LG 12 Kg Silver",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00880609847672l.jpg",
    description: "Recomendable para 2 personas. 11 Ciclos de lavado y 4 ciclos de secado.",
    price: "$13,999"
},
{
    categoria:'Tecnología',
    name: "Consola Xbox Series X 1 TB",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088984264076l.jpg",
    description:
    "La consola Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones de consolas",
    price: "$13,799"
},
{
    categoria:'Hogar y Muebles',
    name: "Sofá Cama Hobbs 165 Bossa Hobbs",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/ae8269ba-b553-41e6-839a-18562f4efda3.42c94f429f95e22e3c5d1300ff4d35f8.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description:
    "Sofá cama individual, ideal para las visitas inesperadas o para un cuarto pequeño o estudio.",
    price: "$4,999"
},
{
    categoria:'Moda',
    name: "Vestido Largo Ropa De Dama Castalia",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/afc2ab30-45dc-420b-a7ef-4577558adc3a.9db72cd58fb46daf0884b8a7e3266931.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description:
    "Vestido largo 22-1 Trevo",
    price: "$384"
},
{
    categoria:'Deportes y Fitness',
    name: "Balón Voilt Axis N°5",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e26afc08-9f8a-4567-a1ff-9c55c09c6427.5699fb773a3bce02f14ce535ba1e4fff.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description: "Balón de fútbol soccer de 32 paneles.",
    price: "$249"
},
{
    categoria:'Herramientas',
    name: "Pala Bellota",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/674094aa-575b-4632-9e41-aec338f65afd.fdd306e8a9651b239508cd2a536ad1a2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description: "Pala cuadrada. Mango de madera. Resistencia al desgaste.",
    price: "$219"
},
{
    categoria:'Belleza y Cuidado personal',
    name: "Dabalash DABA Máscara Waterproof Negro 13ml.",
    img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/bf7f8914-679d-40bb-8fec-499d196b792e.65b0287861305a5272dcbc40eab39010.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
    description: "Efecto alargamiento. Resistencia al agua y humedad. Duración de 24 horas.",
    price: "$275"
},
{
    categoria:'Inmuebles',
    name: "Casa En Venta En Un Solo Nivel, En Las Palmas,  Cuernavaca Morelos.",
    img: "https://http2.mlstatic.com/D_NQ_NP_997444-MLM50264979910_062022-O.webp",
    description: "Privada con vigilancia las 24 Horas. A 5 minutos de la Autopista México-Acapulco.",
    price: "$2,590,000"
},
{
    categoria:'Construcción',
    name: "Varilla Roscada Acero Construcción 1/2 In 1 Metro Surtek",
    img: "https://http2.mlstatic.com/D_NQ_NP_605378-MLM49805796731_042022-O.webp",
    description: "Fija, monta y da soporte a tus construcciones. Modelo: VR581. Cuerpo completamente roscado. Hecha de acero galvanizado.",
    price: "$89"
},
{
    categoria:'Oficinas',
    name: "Silla Ejecutiva Sillón Oficina Ajustable Escritorio",
    img: "https://http2.mlstatic.com/D_NQ_NP_650638-MLM50014075015_052022-O.webp",
    description: "Es una silla para escritorio giratoria 360°, altura ajustable con sistema hidráulico y sistema de balanceo.",
    price: "$1,799",
},
{
categoria:'Juegos y juguetes',
  name: "Juguete Excavadora Control Remoto",
  img: "https://http2.mlstatic.com/D_NQ_NP_701046-CBT48204551854_112021-O.webp",
  description: "El vehículo de construcción de control remoto puede avanzar o retroceder, girar a la izquierda o a la derecha, excavar, rotación de 360 grados",
  price: "$297",
},
{
  categoria:'Bebes',
  name: "Carriola De Bastón",
  img: "https://http2.mlstatic.com/D_NQ_NP_774889-MLM47328565073_092021-O.webp",
  description: "Carriola de bastón compacta y ligera, fácil de llevarla a todos lados e ideal para espacios pequeños o reducidos, con la cual podrás experimentar excelentes paseos tú y tu bebé.",
  price: "$1,199",
},
{
  categoria:'Electrodomésticos',
  name: "Refrigerador Automático 14 Pies Grafito Mabe RME360PVMRE0 Automático",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/82f8485b-effb-4120-ad0a-a9440adb57fb.efbd4130cf46a0cad317502898c61c98.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Amplio espacio interior que permite guardar alimentos y recipientes de gran tamaño.",
  price: "$10,159",
},
{
  categoria:'Electrodomésticos',
  name: "Horno De Microondas General Electric 1.1 Pies Cúbicos Silver",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00750227127941l.jpg",
  description:
    "Equipado con display digital LCD. Función eco para ahorro de energía y 10 niveles de potencia con 9 menús automáticos.",
  price: "$2,990",
},
{
  categoria:'Tecnología',
  name: "Consola PlayStation 5 825 GB",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00071171954176l.jpg",
  description:
    "Experimenta una velocidad sorprendente gracias a su SSD de alta velocidad. Tendrás una nueva experiencia totalmente inmersiva. Disfruta de la potencia de una CPU, una GPU.",
  price: "$15,999",
},
{
  categoria:'Tecnología',
  name: "Lenovo Legion 5 Pro Gaming Laptop",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/cb6d2e39-75dc-41f3-b2d5-5b8d2740dbc2.c20aa8a99a7957a85aafeac1bb297106.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Modelo de procesador: AMD Ryzen 7 5800H. Número de núcleos: 8. Frecuencia turbo máxima: 4,40 GHz. Frecuencia base del procesador: 3,20 GHz",
  price: "$13,799",
},
{
  categoria:'Hogar y Muebles',
  name: "Cama Individual Kessa Muebles Turin",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/c6e4cad3-2b31-4886-a767-b4fa3cef8183.7af8b37a9e1f6209aedbc6aa36bd3874.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Cama tubular fabricado en acero con acabado en color vino. Medidas 103 x 33 x 191.",
  price: "$5,299",
},
{
  categoria:'Hogar y Muebles',
  name: "Mobi Ropero 122cm De Madera Lirio Chocolate",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/9dd726a1-2e63-4173-8614-775d8a7a4de5.eeb8eb6724f4e3b1961e9ede80e5c655.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Aprovecha tus espacios con este superior y práctico ropero lirio para almacenar tu ropa y bienes personales en tu recámara.",
  price: "$6,299",
},
{
  categoria:'Moda',
  name: "Vestido Corto Rojo Cklass",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/1ecd26fa-2315-4c5f-b48a-71ba1334ae5f.5b464aaa7c3df647c6383001f4e42874.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Vestido en color rojo con detalles de botones, elaborado de poliéster/elastano, es una explosión de color y alegría que nos trae esta tendencia, atrévete a lucir dulce, fresca y llena de energía",
  price: "$330",
},
{
  categoria:'Moda',
  name: "Vestido Casual Largo Mujer Color Mostaza Castalia",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/afc2ab30-45dc-420b-a7ef-4577558adc3a.9db72cd58fb46daf0884b8a7e3266931.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description:
    "Diseño cómodo y fresco de la temporada primavera-verano",
  price: "$525",
},
{
  categoria:'Deportes y Fitness',
  name: "Balon Machuka Basketball #7",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e26afc08-9f8a-4567-a1ff-9c55c09c6427.5699fb773a3bce02f14ce535ba1e4fff.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description: "Encordado en nylon. Capa final 100% de hule natural.",
  price: "$279",
},
{
  categoria:'Deportes y Fitness',
  name: "Balón Vóleibol LEIJIAER",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/39baef4a-4998-4b3f-9740-7c8c70810da4.7002f1c5878d6533ad9cacff0da67a5a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description: "Sensación de mano suave, cómoda y de color brillante. Hecho de material de PU, suave para las manos y de uso prolongado.",
  price: "$249",
},
{
  categoria:'Herramientas',
  name: "Taladro Inalámbrico Black Decker 8V Max",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088591148486l.jpg",
  description: "Taladro inalámbrico diseñado para que completes tu kit de herramientas, ya que es un modelo óptimo para tus labores de bricolaje.",
  price: "$665",
},
{
  categoria:'Herramientas',
  name: "Lijadora Orbital Dewalt 12000 RPM 280 W",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00088591138867l.jpg",
  description: "Carcasa anti-deslizante y texturizada. Mantiene la velocidad del disco bajo control y minimiza el daño al arranque.",
  price: "$1,649",
},
{
  categoria:'Belleza y Cuidado personal',
  name: "Labial Velvet - Te Quiero Yuya 3 gr",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/a244567a-1cb1-4f74-835c-50d6c2ac5181.19224f58fbc358e2f49725325f150d4d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description: "Material: piezas de aleación de aluminio duraderas de alta calidad con un mango especialmente hecho, moda y apariencia impresionante.",
  price: "$115",
},
{
  categoria:'Belleza y Cuidado personal',
  name: "Maletín Maquillaje Cosmético",
  img: "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/bf7f8914-679d-40bb-8fec-499d196b792e.65b0287861305a5272dcbc40eab39010.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
  description: "Efecto alargamiento. Resistencia al agua y humedad. Duración de 24 horas.",
  price: "$2,536",
},
{
  categoria:'Inmuebles',
  name: "Casa En Venta En Cumbres San Agustin Monterrey",
  img: "https://http2.mlstatic.com/D_NQ_NP_967105-MLM50163546224_062022-O.webp",
  description: "Cochera para un auto con portón eléctrico, con sala-comedor y cocina integral equipada.",
  price: "$1,990,000",
},
{
  categoria:'Inmuebles',
  name: "Casa En Venta En Las Lomas Privada Santa Cruz García Nuevo León",
  img: "https://http2.mlstatic.com/D_NQ_NP_917454-MLM50139162421_052022-O.webp",
  description: "Cochera doble con portón eléctrico, sala, comedor y cocina integral.",
  price: "$2,590,000",
},
{
  categoria:'Construcción',
  name: "Clavo Concreto 2', Galvanizado, Caja 1 Kg",
  img: "https://http2.mlstatic.com/D_NQ_NP_932169-MLM41928784791_052020-O.webp",
  description: "Fabricados en acero al carbono, con acabado galvanizado. Cuerpo roscado, para mayor sujeción.",
  price: "$130",
},
{
  categoria:'Construcción',
  name: "Martillo Mango Fibra De Vidrio Uña Recta 16 Oz Truper 19997",
  img: "https://http2.mlstatic.com/D_NQ_NP_911146-MLM44642030682_012021-O.webp",
  description: "Cabeza forjada en acero, cara totalmente pulida. Mango de fibra de vidrio con grip de doble inyección que reduce las vibraciones del golpe.",
  price: "$195",
},
{
  categoria:'Oficinas',
  name: "Impresora A Color Multifunción Epson EcoTank L3250",
  img: "https://http2.mlstatic.com/D_NQ_NP_650638-MLM50014075015_052022-O.webp",
  description: "Imprime archivos, escanea documentos y haz todas las fotocopias que necesites para tu oficina.",
  price: "$4,899",
},
{
  categoria:'Oficinas',
  name: "Escritorio Ejecutivo Para Computadora Moderno Mesa Trabajo",
  img: "https://http2.mlstatic.com/D_NQ_NP_602155-MLM48926793258_012022-O.webp",
  description: "Escritorio minimalista vanguardista ligero y resistente marca TOP LIVING.",
  price: "$1,499",
},
{
  categoria:'Juegos y juguetes',
  name: "Robot Inteligente A Control Remoto",
  img: "https://http2.mlstatic.com/D_NQ_NP_748770-CBT48808768048_012022-O.webp",
  description: "El vehículo de construcción de control remoto puede avanzar o retroceder, girar a la izquierda o a la derecha, excavar, rotación de 360 grados",
  price: "$297",
},
{
  categoria:'Juegos y juguetes',
  name: "Cactus Bailarin Peluche Felpa",
  img: "https://http2.mlstatic.com/D_NQ_NP_778357-MLM46985174722_082021-O.webp",
  description: "El juguete contiene 120 canciones en inglés.",
  price: "$197",
},
{
  categoria:'Bebes',
  name: "Camita Portátil Nido Moisés",
  img: "https://http2.mlstatic.com/D_NQ_NP_712009-MLM49003754526_022022-O.webp",
  description: "Tamaño ajustable para los primeros meses de vida, simplemente afloje el cordón en la parte baja de la camita para agrandar el tamaño.",
  price: "$699",
},
{
  categoria:'Bebes',
  name: "Almohadita Para Bebé",
  img: "https://http2.mlstatic.com/D_NQ_NP_895269-MLM49005746277_022022-O.webp",
  description: "El tamaño ideal para llevar a todas partes.",
  price: "$699",
}];

let prodCategoria = productos.filter(prod => prod.categoria==localStorage.categoria);

prodCategoria.forEach(
    function addItem(item){
        const itemHTML = 
        '<div class="slick">\n' +
        '<div class="card">\n' +
            '<div class="card-img"><img src = "'+ item.img +'" id = "imgOferta"></div>\n' + 
            '<div class="card-info">\n' + 
                '<p class="text-title">'+ item.name + '</p>\n' +
                '<p class="text-body">' + item.description + '</p>\n' +
            '</div>\n' +
            '<div class="card-footer">\n' +
                '<span class="text-title">'+item.price+'</span>\n'+
            '</div>\n'+
        '</div>\n'+
    '</div>';
  //Mando la tarjeta por defecto al HTML en el div con el id track2
    const itemsContainer2 = document.getElementById("track3");
    itemsContainer2.innerHTML += itemHTML;
  });