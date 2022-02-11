const texto = "Hola mundo";

console.log(texto, "empieza con H", texto.startsWith("H"));
console.log(texto, "termina con o", texto.endsWith("o"));
console.log(texto, "incluye la palabra mundo", texto.includes("mundo"));

const amigos = ["Carlos", "Alejandro", "Cesar", "Manuel"];

console.log(amigos.includes("Manuel"));

console.log(amigos.find((amigo) => amigo.length > 6));

console.log(amigos.findIndex((amigo) => amigo.length === 5));
