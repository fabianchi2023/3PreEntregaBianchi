let nombre = prompt("Ingresa tu nombre:");
while (nombre === "" || nombre == null) {
  alert("Debes completar tu nombre");
  nombre = prompt("Ingresa tu nombre:");
}
let seleccionMenu = prompt("Bienvenido/a " +nombre+", en que podemos ayudarte?: \n 1- Alquiler canchas \n 2- Salon \n 3- Gimnasio \n 4- Tienda \n 5- Salir"
);
while (seleccionMenu != 5) {
  switch (seleccionMenu) {
    case "1":alquilerCanchas()
      break;
    case "2":
      alert(
        "El salon de eventos se encuentra disponible unicamente para socios"
      );
      break;
    case "3":
      alert("El servicio de gimnasio tiene un valor de $5000");
      break;
    case "4":
      alert("Vamos a comprar!");
      break;
    case "5":
      alert("Gracias por tu visita!");
      break;
    default:
      alert("Opcion no válida");
      break;
  }
  seleccionMenu = prompt(
    "Deseas consultar algo mas?: \n 1- Alquiler canchas \n 2- Salon \n 3- Gimnasio \n 4- Tienda \n 5- Salir"
  );
  function alquilerCanchas(){
    let costo = 5000
    let cobro = parseInt(prompt("El costo del alquiler es de $5000. Con cuanto abonará?:"))
    while(!cobro){
        alert("Debe ingresar un monto para registrar la reserva")
        cobro = parseInt(prompt("El costo del alquiler es de $5000. Con cuanto abonará?:"))
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
}
alert("Gracias por visitarnos! Te esperamos pronto "+ nombre)
