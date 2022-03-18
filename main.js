import { RecetaCompleja } from "./recetaCompleja.js";
import { Cocina } from "./cocina.js";

let r = new RecetaCompleja("torta opera");

r.addIngrediente("harina", 300);
r.addIngrediente("manteca", 300);
r.addIngrediente("huevos", 3);

r.addHabilidad("pasteleria");
r.addHabilidad("cocina francesa");

let cocina1 = new Cocina("cocina_ej_2", 0);

console.log(`Habilidades requeridas: ${r.habilidades}`);
console.log(`Puede ser preparada la receta: ${r.puedeSerPreparada(cocina1)}`);
