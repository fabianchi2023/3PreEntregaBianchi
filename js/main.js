////////////////////////////////////// Entrega Final ////////////////////////////////////

 const servicios = [
   {id:1, nombre:"Fútbol 5", tipo:"Sintético", precio: 15000, imagen:"https://muchosnegociosrentables.com/wp-content/uploads/2015/08/campo-de-f%C3%BAtbol-5-o-7.jpg"},
   {id:2, nombre:"Fútbol 5", tipo:"Cemento", precio: 10000, imagen:"https://pbs.twimg.com/media/EXdUYBHXgAIKsfu.png"},
   {id:3, nombre:"Fútbol 7", tipo:"Sintético", precio: 2000, imagen:"https://sportmaster.mx/wp-content/uploads/cancha-de-futbol-7-con-pasto-sintetico-1.jpg"},
   {id:4, nombre:"Fútbol 7", tipo:"Cemento", precio: 18000, imagen:"https://www.elheraldodejuarez.com.mx/local/w67djo-lacancha-de-futbol-rapido.jpg/ALTERNATES/LANDSCAPE_768/Lacancha%20de%20futbol%20r%C3%A1pido.jpg"},
   {id:5, nombre:"Paddle", tipo:"Cemento", precio: 10000, imagen: "https://media.eldiariosur.com/p/b1b84a58ac2a2004b5bcd39ac20122e3/adjuntos/291/imagenes/000/555/0000555210/1200x675/smart/whatsapp-image-2021-10-14-at-160743-1jpeg.jpeg"},
   {id:6, nombre:"Paddle", tipo:"Sintético", precio: 20000, imagen:"https://belgranotenis.com.ar/img/tr-008-gr.jpg" },
   {id:7, nombre: "Salon", tipo:"Privado", precio: 150000, imagen: "https://www.inolvidables15.com/assets/images/2087_18958fotoalgr.jpg"},
   {id:8, nombre: "Gimnasio", tipo:"Full", precio: 5000,imagen:"https://elbiguaneuquen.com.ar/wp-content/uploads/gim-web.jpg"},
   {id:9, nombre: "Gimnasio", tipo:"Máquinas", precio: 5000, imagen: "https://www.bodytone.eu/wp-content/uploads/2023/05/Tipos-maquinas-para-gimnasio-Bodytone.jpeg"},
 ]
// Inserto los elementos de mi array mediante la funcion mostrarServicios() y recorriendo cada uno de los elementos con un forEach. Luego lo impacto mediante .innerHTML en el div asignado al ID = "servicios"

// fetch("./servicios.json")
//   .then(buscar => buscar.JSON())
//   .then(servicios => {
//     localStorage.setItem("servicios", JSON.stringify(servicios))
//   }
// )

const setServiciosLS = (servicios) => {
  localStorage.setItem("servicios", JSON.stringify(servicios))
}

const getServiciosLS = () => {
  return JSON.parse(localStorage.getItem("servicios"));
}

function mostrarServicios() {
  const servicios = getServiciosLS()
  let listado = "";

    servicios.forEach(servicio => {
      listado += `<div class="col-md-4 text-center my-3">
      <img src="${servicio.imagen}" alt="${servicio.nombre}" height="64"/>
      <a href="servicio.html" onclick="setIdServicio(${servicio.id})" class="text-decoration-none">
      <p>${servicio.nombre}</p>
      <p>${servicio.tipo}</p>
      <button>Ver mas</button>
      </div>`;
    })

  document.getElementById("servicios").innerHTML = listado;
}

mostrarServicios()

// Evento al ingresar los datos solicitados previo a mostrar los servicios // => Pantalla principal
// const campoNombre = document.getElementById("nombre")
// const botonIngresar = document.getElementById("ingresar")
// botonIngresar.addEventListener("click", saludar)
    
//  function saludar() {
//     Swal.fire({
//       icon: "success",
//       title: `Bienvenido ${campoNombre.value}`,
//       text: "Has ingresado al sitio del club de barrio mas grande del mundo!",
//     });
//  }


//Busqueda individual del servicio para mostrar el detalle//

const getServicioLS = () => {
  const servicios = getServiciosLS()
  const id = getIdServicioLS()
  const servicio = servicios.find(item => item.id === id)
  
  return servicio;
}

const setServicioLS = (id) => {
  localStorage.setItem("servicio", JSON.stringify(id))
}

const getIdServicioLS = () => {
  return JSON.parse(localStorage.getItem("servicio"))
}

function mostrarServicio() {
  const servicio = getServicioLS()
  let muestra = `<div class="col-md-6 offset-md-3 text-center">
  <img src="${servicio.imagen}" alt="${servicio.nombre}" class="img-fluid" />
  <p class="colorFuente roboto-bold">${servicio.nombre}</p>
  <p class="colorFuente roboto-medium">${servicio.tipo}</p>
  <p class="colorFuente roboto-bold">$${servicio.precio}</p>
  </a>
  </div>`;

  document.getElementById("servicio").innerHTML = muestra
}

mostrarServicio()


class Reserva {
  constructor(){
    
    this.item = []
  
  }

  agregarServicio (id){
    let servicio = servicios.find((serv)=> serv.id === id)
    if (servicio){
      this.item.push(servicio)
      console.log("Servicio " + id + " agregado");
    }
  }

  mostrarReserva(){
    let listado = ""
    this.item.forEach(servicio => {
      listado += servicio.nombre + " " + servicio.tipo + "\n"
    });
    return listado
  }

  calcularCostoReservaTotal(){
    let costo = 0
    this.item.forEach(item => {
      costo += item.precio
    })
    return costo
  }
}

// Primeras entregas sin DOM //
// function confirmarReserva(){
//   let costo = Math.round(reserva.calcularCostoReservaTotal())
//   let cobro = parseInt(prompt("El costo de el/los servicio/s es de $"+ costo + ". Con cuanto abonará?:"))
//   while(!cobro){
//      alert("Debe ingresar un monto para confirmar la reserva")
//      cobro = parseInt(prompt("El costo del alquiler es de $"+ costo + ". Con cuanto abonará?:"))
//   }
//   if (cobro < costo){
//       alert("Aun le faltan $"+(costo - cobro)+". Su reserva no ha podido ser registrada")
//   }
//   else if (cobro > costo){
//       alert("Su reserva ha sido registrada a nombre de "+nombre+". Su vuelto será de $"+(cobro-costo)+".")
//   }
//   else{
//       alert("El pago es justo. Su reserva ha sido registrada a nombre de "+ nombre)
//   }
// }

// const reserva = new Reserva()

// let nombre = prompt("Bienvenido/a al sitio de reservas del Club Alianza. \nPor favor, ingresa tu nombre para que podamos registrarte:");
// while (nombre === "" || nombre == null || nombre.length < 3) {
//   alert("Debes completar tu nombre");
//   nombre = prompt("Bienvenido/a al sitio de reservas del Club Alianza. \nPor favor, ingresa tu nombre para que podamos registrarte:");
// }

// let seleccionMenu = parseInt(prompt(nombre + ", que servicios deseas reservar? (0 o 'Enter' para finalizar): \n\n" + mostrarServicios2()))
// if (seleccionMenu == 0 || isNaN(seleccionMenu)){
//   alert("No has seleccionado ningun servicio.")
// } else {
//   while (seleccionMenu != 0){
//     reserva.agregarServicio(seleccionMenu)
//     seleccionMenu = parseInt(prompt(nombre + " , que servicios deseas reservar? (0 para finalizar): \n\n" + mostrarServicios2()))
//   }
  
//   let listaReserva = nombre + " has seleccionado los siguientes items:\n\n" + reserva.mostrarReserva();
//   let costoFinal = "El costo total de su reserva es de: $" + Math.round(reserva.calcularCostoReservaTotal());
//   alert(listaReserva + "\n" + costoFinal);
      
//   let confirmaReserva = prompt("Deseas confirmar la reserva de los servicios indicados? SI (S) / NO (N)")
//   if (confirmaReserva === "S" || confirmaReserva === "s"){
      
//     confirmarReserva()
     
//   } else {
   
//     alert("Su reserva ha sido cancelada")

//   }

// }

// alert("Gracias por visitarnos! Te esperamos pronto "+ nombre)
