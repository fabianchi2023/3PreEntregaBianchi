////////////////////////////////////// 2da Pre Entrega////////////////////////////////////
const servicios = [
  {id:1, estilo:"Fútbol 5", tipo:"Sintético", precio: 15000},
  {id:2, estilo:"Fútbol 5", tipo:"Cemento", precio: 10000},
  {id:3, estilo:"Fútbol 7", tipo:"Sintético", precio: 20000},
  {id:4, estilo:"Fútbol 7", tipo:"Cemento", precio: 18000},
  {id:5, estilo:"Paddle", tipo:"Cemento", precio: 10000},
  {id:6, estilo:"Paddle", tipo:"Cesped", precio: 20000},
  {id:7, estilo: "Salon", tipo:"Privado", precio: 150000},
  {id:8, estilo: "Gimnasio", tipo:"Full", precio: 5000},
  {id:9, estilo: "Gimnasio", tipo:"Máquinas", precio: 5000},
]

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
      listado += servicio.estilo + " " + servicio.tipo + "\n"
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

function mostrarServicios() {
  let listado = "";

  servicios.forEach(item => {
      listado += item.id + " - " + item.estilo + " - " + item.tipo + " - $" + item.precio + "\n";
  })

  return listado;
}

function confirmarReserva(){
  let costo = Math.round(reserva.calcularCostoReservaTotal())
  let cobro = parseInt(prompt("El costo de el/los servicio/s es de $"+ costo + ". Con cuanto abonará?:"))
  while(!cobro){
     alert("Debe ingresar un monto para confirmar la reserva")
     cobro = parseInt(prompt("El costo del alquiler es de $"+ costo + ". Con cuanto abonará?:"))
  }
  if (cobro < costo){
      alert("Aun le faltan $"+(costo - cobro)+". Su reserva no ha podido ser registrada")
  }
  else if (cobro > costo){
      alert("Su reserva ha sido registrada a nombre de "+nombre+". Su vuelto será de $"+(cobro-costo)+".")
  }
  else{
      alert("El pago es justo. Su reserva ha sido registrada a nombre de "+ nombre)
  }
}

const reserva = new Reserva()

let nombre = prompt("Bienvenido/a al sitio de reservas del Club Alianza. \nPor favor, ingresa tu nombre para que podamos registrarte:");
while (nombre === "" || nombre == null || nombre.length < 3) {
  alert("Debes completar tu nombre");
  nombre = prompt("Bienvenido/a al sitio de reservas del Club Alianza. \nPor favor, ingresa tu nombre para que podamos registrarte:");
}

let seleccionMenu = parseInt(prompt(nombre + ", que servicios deseas reservar? (0 o 'Enter' para finalizar): \n\n" + mostrarServicios()))
if (seleccionMenu == 0 || isNaN(seleccionMenu)){
  alert("No has seleccionado ningun servicio.")
} else {
  while (seleccionMenu != 0){
    reserva.agregarServicio(seleccionMenu)
    seleccionMenu = parseInt(prompt(nombre + " , que servicios deseas reservar? (0 para finalizar): \n\n" + mostrarServicios()))
  }
  
  let listaReserva = nombre + " has seleccionado los siguientes items:\n\n" + reserva.mostrarReserva();
  let costoFinal = "El costo total de su reserva es de: $" + Math.round(reserva.calcularCostoReservaTotal());
  alert(listaReserva + "\n" + costoFinal);
      
  let confirmaReserva = prompt("Deseas confirmar la reserva de los servicios indicados? SI (S) / NO (N)")
  if (confirmaReserva === "S" || confirmaReserva === "s"){
      
    confirmarReserva()
     
  } else {
   
    alert("Su reserva ha sido cancelada")

  }

}

alert("Gracias por visitarnos! Te esperamos pronto "+ nombre)
