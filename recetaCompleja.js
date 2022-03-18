import { Receta } from "./receta.js";
import { Cocina } from "./cocina.js";

class RecetaCompleja extends Receta {
  constructor(nombre) {
    super(nombre);
    this.habilidades = [];
  }

  addHabilidad(habilidad) {
    if (!this.habilidades.includes(habilidad)) {
      this.habilidades.push(habilidad);
      return true;
    } else {
      return false;
    }
  }

  puedeSerPreparada(cocina) {
    if (super.puedeSerPreparada(cocina)) {
      const habilidadesDeLaCocina = this.habilidades.map((habilidad) => {
        if (!cocina.tieneHabilidad(habilidad)) {
          console.log(`No tiene la habilidad de ${habilidad}`);
          return false;
        } else {
          return true;
        }
      });

      if (habilidadesDeLaCocina.includes(false)) {
        let habilidadesFaltantes = 0;
        for (let i = 0; i < habilidadesDeLaCocina.length; i++) {
          if (habilidadesDeLaCocina[i] === false) habilidadesFaltantes++;
        }
        if (cocina.nivelExperiencia > habilidadesFaltantes) {
          //Nivel de experiencia optimo
          return true;
        } else {
          //No cumple ninguna condicion
          return false;
        }
      } else {
        //tiene todas las habilidades
        return true;
      }
    }
  }
}

export { RecetaCompleja };
