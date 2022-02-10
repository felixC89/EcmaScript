function registrarUsuario(
  nombre = "No especificado",
  pais = "No especificado",
  correo = "No especificado",
  telefono = "00000000"
) {
  return `Nombre: ${nombre}, Pais: ${pais}, Telefono: ${telefono}, Correo: ${correo}`;
}

console.log(
  registrarUsuario(undefined, "Nicaragua", "correo@correo.com", 8888888)
);
