const usuario = {
  nombre: "Carlos",
  edad: 20,
  pais: "Nicaragua",
  profesion: "Developer",
  correo: "Correo@correo.com"
};

const { nombre, edad, profesion = "No definido" } = usuario;

//console.log(profesion)

const mostrarInfo = ({ nombre, profesion = "No definido" }) =>
  console.log(`${nombre} es ${profesion}`);

mostrarInfo(usuario);
