const promesa = new Promise((resolve, reject) => {
  //la accion que se ejecutara
  //resolve()
  //reject()

  setTimeout(() => {
    const exito = true;
    if (exito) {
      resolve("La operacion tuvo exito");
    } else {
      reject("La operacion no tuvo exito");
    }
  }, 4000);
});
promesa.then((msg) => {
  alert(msg);
});

promesa.catch((msg) => {
  alert(msg);
});
