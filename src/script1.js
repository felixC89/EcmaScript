const nombre = "Antonio";
const edad = "20";
const pais = "Nicaragua";

console.log(`La persona es ${nombre}, tiene ${edad} y es de ${pais}`);

const nombres = ["Carlos", "Alejandro", "Manuel", "Cesar"];

const numero_caracteres = nombres.map(
  (nom) => `${nom} tiene ${nom.length} caracteres en su nombre.`
);

console.log(numero_caracteres);
