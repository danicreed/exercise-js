let dia = prompt("Ingresa un día de la semana").toLowerCase();

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("ánimate estamos entre semana sigue trabajando juicioso :)");
} else {
  alert("Descansa estamos en fin de semana, aprovecha para divertirte");
}
