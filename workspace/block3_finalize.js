function(key, value) {

  // Convertim el diccionari amb els valors obtinguts de reduce en una
  // matriu per a poder iterar els elements. Aixi podrem comparar-los
  // i obtenir la especie amb major valor de biomassa (max_biomass)
  // INFO:
  //  - https://stackoverflow.com/questions/966225/how-can-i-create-a-two-dimensional-array-in-javascript

  var num_species = Object.keys(value).length;
  var matrix = new Array(num_species).fill(null).map(() => new Array(2));
  var row = 0;

  for (specie in value) {
    matrix[row][0] = specie;
    matrix[row][1] = value[specie];
    row++;
  }

  // Declarem les variables on desarem el valor maxim trobat mentre
  // que iterem sobre la matriu, aixi com d'altres auxiliars (row)

  var max_biomass = 0;
  var specie_with_max_biomass = '';

  // Finalment iterem sobre la matriu per a trobar la especie amb valor
  // maxim de biomassa, que es guardara a la variable "specie_with_max_biomass"
  // per a ser retornada per la funcio finalize

  for (val of matrix) {
    if (val[1] > max_biomass) {
        max_biomass = val[1];
        specie_with_max_biomass = val[0];
    }
  }

  // printjson({ "reduceKey": key, "value": specie_with_max_biomass })

  return specie_with_max_biomass
}
