class Receta {
  constructor(nombreReceta) {
    this.nombre = nombreReceta;
    this.ingredientes = [];
  }

  addIngrediente(ingrediente, cantidad) {
    this.ingredientes.push([ingrediente, cantidad]);
  }

  get getNombre() {
    return this.nombre;
  }

  puedeSerPreparada(cocina) {
    //....codigo ya implementado ....
    return true; //retorno a modo de ejemplo
  }

  preparar(cocina) {
    //Item 1 -> Validacion con código ya existente
    if (this.puedeSerPreparada(cocina)) {
      //Item 2
      //Codigo para reucir stock en la cocina
      //Código...

      //Item 3 Retornar true
      return true;
    } else {
      //no puede ser preparada por la cocina
      return false;
    }
  }
}

export { Receta };
