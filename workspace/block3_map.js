function() {
  var key = { campaign: this.campaign };
  if (this.biomass_value !== "ERROR") {

    // Escollim un format del valor associat a la clau que ens permetra
    // associar el valor de biomassa de les mostres d'especie de cada
    // campanya al seu nom d'especie. Aixi podrem generar un diccionari
    // de valors per a cada clau de manera que podrem utilitzar un objecte
    // acumulador durant la etapa de reduccio per a fer la suma de biomasses
    // en funcio de la especie per a cada campanya

    value = {
      [this.scientific_name]: this.biomass_value,
    }
    //printjson({"mapKey": key, "value": value});

    emit(key, value);
  }
}
