class Cocina {
  constructor(nombre, experiencia) {
    this.nombre = nombre;
    this.habilidades = ["pasteleria"];
    this.experiencia = experiencia;
    this.stock = [];
  }
  get getNombre() {
    return this.nombre;
  }

  tieneHabilidad(habilidad) {
    return this.habilidades.includes(habilidad);
  }

  get nivelExperiencia() {
    return this.experiencia;
  }
}

export { Cocina };
