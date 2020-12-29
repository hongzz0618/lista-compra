
const fs = require("fs");
fs.readdir(
  "/home/hong/lista_compra_fitness/src/assets/productImages",
  function (err, archivos) {
    if (err) {
      console.log(err);
      return;
    }
    for (let index = 0; index < archivos.length; index++) {
        let nombre = archivos[index].split("-")[0]
        console.log(`{id: "${index+1}",nombre: "${nombre}",foto: this.imgPath + "${archivos[index]}"},`)
    }
  }
);
