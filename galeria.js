//galeria
    //acceso a los botones
    const btnCierra = document.getElementById("btn-cierra");
    const btnAdelanta = document.getElementById("btn-adelanta");
    const btnRetrocede = document.getElementById("btn-retrocede");
    const imagenes = document.querySelectorAll(".galeria-img");
    //acceso al contenedor principal
    const lightBox = document.getElementById("contenedor-principal");
    //acceso a imagen activa
    const imgActiva = document.getElementById("img-activa");
    let indiceImagen = 0;
    //abre el lightbox
    const openLightBox = (event)=>{
        imgActiva.src= event.target.src;
        lightBox.style.display='flex';
        indiceImagen = Array.from(imagenes).indexOf(event.target);
    }
    //evento de click
    imagenes.forEach((imagen)=>{
        imagen.addEventListener('click', openLightBox);
    })
    //podria juntar el de si esta abierto, cerrarlo
    //cierra la galeria
    btnCierra.addEventListener('click',()=>{
        lightBox.style.display='none';
    })
    //next
    const adelantaImagen=()=>{
        if(indiceImagen === imagenes.length-1){
            indiceImagen = -1;
        }
        imgActiva.src = imagenes[indiceImagen + 1].src;
        indiceImagen++;
    }
    btnAdelanta.addEventListener('click',adelantaImagen);
    //back
    const retrocedeImagen=()=>{
        if(indiceImagen === 0){
            indiceImagen = imagenes.length;
        }
        imgActiva.src = imagenes[indiceImagen-1].src;
        indiceImagen--;
    }
    btnRetrocede.addEventListener('click',retrocedeImagen);
   