function(key, value) {

  // Declarem les variables on desarem el valor maxim trobat i el nom
  // cientific de la especie

  var max_biomass = 0;
  var specie_with_max_biomass = '';

  // Finalment iterem sobre el diccionari per a trobar la especie amb valor
  // maxim de biomassa, que es guardara a la variable "specie_with_max_biomass"
  // per a ser retornada per la funcio finalize

  Object.keys(value).forEach(specie => {
    var total_biomass = value[specie];
    if (total_biomass > max_biomass) {
      max_biomass = total_biomass;
      specie_with_max_biomass = specie;
    }
  });

  //printjson({ "reduceKey": key, "value": specie_with_max_biomass })

  return specie_with_max_biomass
}
