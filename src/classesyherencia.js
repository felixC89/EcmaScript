class Usuario {
  constructor(nombre, edad) {
    (this.nombre = nombre),
      (this.edad = edad),
      (this.correo = `${nombre}@correo.com`);
  }

  mostrarSaludo() {
    return `Hola ${this.nombre}`;
  }
  mostrarInfo() {
    return `
    Nombre:${this.nombre} <br />
    Edad:${this.edad} <br />
    Correo:${this.correo} <br /><hr />
    `;
  }
}

class Estudiante extends Usuario {
  constructor(nombre, edad, carrera) {
    super(nombre, edad);
    this.carrera = carrera;
  }

  mostrarInfo() {
    return `
    Nombre:${this.nombre} <br />
    Edad:${this.edad} <br />
    Correo:${this.correo} <br />
    Carrera:${this.carrera} <br />
    <hr />
    `;
  }
}

const carlos = new Usuario("Carlos", 20);
document.write(carlos.mostrarInfo());

const ramiro = new Estudiante("Ramiro", 23, "Developer");
document.write(ramiro.mostrarInfo());
