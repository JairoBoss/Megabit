var clic = 1;
var clicVideos = 1;
var imagenes = new Array();
var videos = new Array();

function Contenedor(titulo, ruta, informacionArticulo) {
    this.titulo = titulo;
    this.ruta = ruta;
    this.informacion = informacionArticulo;
}

//


var armitage = new Contenedor('Armitage', 'https://img.wonderhowto.com/img/25/02/63554002480751/0/hack-like-pro-metasploit-for-aspiring-hacker-part-4-armitage.1280x600.jpg', 'Armitage es una  Herramienta e colaboración en equipo que permite el uso de Scripts para Metasploit que permite visualizar objetivos, recomienda exploits y expone las características avanzadas de post-explotación que tiene el framework.');
var nmap = new Contenedor('Nmap', 'https://www.marindelafuente.com.ar/wp-content/uploads/2019/04/nmap.jpg', 'Nmap (“mapeador de redes”) es una herramienta de código abierto para exploración de red y auditoría de seguridad.');
var hydra = new Contenedor('Hydra', 'https://4.bp.blogspot.com/-uxMgpNDPHis/WL4aV8uzt8I/AAAAAAAABe8/RevyouM22KUwvmH6a4YBRmgkk32HP-XeQCLcB/s1600/hidra.jpg', 'Hydra es una herramienta para crackear contraseñas y conseguir acceder de forma no autorizada a redes y sistemas.');
var ncrac = new Contenedor('Ncrack', 'https://2.bp.blogspot.com/-1IDvXRx-q1A/W8gHQLODxBI/AAAAAAAAYHQ/fL1ciwZ7rJ8tdf_1T6-gJ9xaph_JrKwXgCLcBGAs/s1600/Ncrack.jpg', 'Ncrack es una herramienta de craqueo de autenticación de red.');
var sqlmap = new Contenedor('Sqlmap', 'https://cdn.cyberpunk.rs/wp-content/uploads/2018/08/sqlmap_bg2.jpg', 'sqlmap is an open source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws and taking over of database.');
var crunh = new Contenedor('Crunch', 'https://blog.ehcgroup.io/wp-content/uploads/2019/01/Co%CC%81mo-utilizar-Crunch-Una-Gui%CC%81a-de-comandos-860x448.jpg', 'Crunk es una herramienta que nos sirve para crear diccionarios de contraseña, con parametros que nosotros indiquemos, por ejemplo el tamañano minimo y maximo de la contraseña, que caracteres puede contener la contraseña, etc.')

imagenes[0] = armitage;
imagenes[1] = nmap;
imagenes[2] = hydra;
imagenes[3] = ncrac;
imagenes[4] = sqlmap;
imagenes[5] = crunh;

var instalarKaliVB = new Contenedor('¿Como instalar kali?', 'https://www.youtube.com/embed/JMSRMH6fPrM', 'En este video aprenderás como instalar Kali linux en VB.');
var instalarKaliDualBoot = new Contenedor('Como instalar kali DUal Boot con windows 10', 'https://www.youtube.com/embed/6GK50IWkXT0', 'En este video aprenderás como instalar Kali linux junto a windows 10 con dual boot.');
var instalarNethunter = new Contenedor('¿Como instalar Nethunter en un Android?', 'https://www.youtube.com/embed/l6651WO_7ds', 'En este video aprenderás como instalar Nethunter en un dispositivo android.');

videos[0] = instalarKaliVB;
videos[1] = instalarKaliDualBoot;
videos[2] = instalarNethunter;


function mostrarImagenes() {
    document.getElementById("section").style.display = 'none';
    document.getElementById("izquierdaa").style.display = 'none';
    document.getElementById("derechaa").style.display = 'none';
    if (clic == 1) {
        document.getElementById("izquierda").style.display = 'inline';
        document.getElementById("derecha").style.display = 'inline';

        document.getElementById("frame").style.display = 'block';

        var titulo = document.getElementById("tituloArticulo");
        var imagen = document.getElementById("misfotos");
        var informacion = document.getElementById("informacionDelArticulo");


        titulo.innerHTML = armitage.titulo;
        imagen.src = armitage.ruta;
        informacion.innerHTML = armitage.informacion;
        clic = clic + 1;
        clicVideos = 1;
    } else {
        document.getElementById("izquierda").style.display = 'none';
        document.getElementById("derecha").style.display = 'none';
        document.getElementById("frame").style.display = 'none';
        clic = 1;

    }
}

function mostrarVideos() {
    document.getElementById("izquierda").style.display = 'none';
    document.getElementById("derecha").style.display = 'none';
    document.getElementById("frame").style.display = 'none';

    if (clicVideos == 1) {
        document.getElementById("section").style.display = 'block';

        document.getElementById("izquierdaa").style.display = 'inline';
        document.getElementById("derechaa").style.display = 'inline';

        var titulo = document.getElementById("tituloVIdeo");
        var imagen = document.getElementById("video");
        var informacion = document.getElementById("informacionDelVideo");


        titulo.innerHTML = instalarKaliVB.titulo;
        imagen.src = instalarKaliVB.ruta;
        informacion.innerHTML = instalarKaliVB.informacion;

        clicVideos = clicVideos + 1;
        clic = 1;
    } else {
        document.getElementById("section").style.display = 'none';
        document.getElementById("izquierdaa").style.display = 'none';
        document.getElementById("derechaa").style.display = 'none';
        clicVideos = 1;

    }
}

var imagen_a_mostrar = 0;

function mover(numero, tipo) {
    if (tipo === 0) {
        var titulo = document.getElementById("tituloArticulo");
        var imagen = document.getElementById("misfotos");
        var informacion = document.getElementById("informacionDelArticulo");

        var ultima = imagenes.length - 1;
        var temp = imagen_a_mostrar + numero;

        if (temp < 0) {
            temp = ultima;
        }
        if (temp > ultima) {
            temp = 0;
        }
        imagen_a_mostrar = temp;

        titulo.innerHTML = imagenes[imagen_a_mostrar].titulo;
        imagen.src = imagenes[imagen_a_mostrar].ruta;
        informacion.innerHTML = imagenes[imagen_a_mostrar].informacion;
    }
    if (tipo === 1) {
        var titulo = document.getElementById("tituloVIdeo");
        var imagen = document.getElementById("video");
        var informacion = document.getElementById("informacionDelVideo");

        var ultima = videos.length - 1;
        var temp = imagen_a_mostrar + numero;

        if (temp < 0) {
            temp = ultima;
        }
        if (temp > ultima) {
            temp = 0;
        }
        imagen_a_mostrar = temp;

        titulo.innerHTML = videos[imagen_a_mostrar].titulo;
        imagen.src = videos[imagen_a_mostrar].ruta;
        console.log(videos[imagen_a_mostrar].ruta);
        informacion.innerHTML = videos[imagen_a_mostrar].informacion;

    }

}

