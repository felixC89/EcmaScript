const persona = ["Antonio", 32, "Nicaragua", "Desarrollador"];

//destructuracion de array
let [
  nombre = "no especificado",
  edad = "no especificado",
  pais = "no especificado",
  profesion = "no especificado"
] = persona;

const mostrarinfo = ([nombre, edad = "no especificado", pais] = persona) =>
  console.log(nombre, pais);

mostrarinfo(persona);
//console.log(nombre)
