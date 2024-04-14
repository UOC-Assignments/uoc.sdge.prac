function(key, values) {

  // Utilitzem un acumulador per tal de realitzar la suma de valors de biomassa
  // per a cada especie, de manera que podrem retornar la estructura de dades
  // a les conseguents invocacions de la funcio reduce per a seguir acumulant
  // la resta de subconjunts de valors associats a la mateixa clau (this.campaign)
  // INFO:
  //  - https://stackoverflow.com/questions/49794240/in-javascript-array-reduce-what-does-the-accumulator-and-value-actually-mean
  //  - https://stackoverflow.com/questions/10654992/how-can-i-get-a-collection-of-keys-in-a-javascript-dictionary

  var biomass_by_specie = values.reduce((acc, dictionary) => {
    Object.keys(dictionary).forEach(key => {
        var value = dictionary[key];
        acc[key] = (acc[key] || 0) + value; // Bugfix: He hagut d'implementar un workaround per a obviar algunes entrades del diccionari de valors malformades. Exemple -> "Nezumia aequalis" : 241 .......... 22.08
    });
    return acc;
  }, {});

  printjson({
    "reduceKey": key,
    "biomass_by_specie": biomass_by_specie,
  });

  return (biomass_by_specie);
}
