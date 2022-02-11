const crearobjetos = (nombre, edad) => {
  return {
    //nombre:nombre,
    //edad:edad
    nombre,
    edad,
    mostraInfo() {
      return `${nombre} tiene ${edad} de edad.`;
    }
  };
};

console.log(crearobjetos("felix", 32).mostraInfo());
