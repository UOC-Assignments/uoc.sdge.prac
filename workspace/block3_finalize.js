function(key, value) {

  let maxBiomass = 0;
  let specieWithMaxBiomass = '';

  const numSpecies = Object.keys(value).length;
  const matrix = new Array(numSpecies).fill(null).map(() => new Array(2));

  let rowIndex = 0;
  for (specie in value) {
      if (value.hasOwnProperty(specie)) {
          matrix[rowIndex][0] = specie;
          matrix[rowIndex][1] = value[specie];
          rowIndex++;
      }
  }

  //print(matrix[0][0] + ': ' + matrix[0][1])

  for (val of matrix) {
    if (val[1] > maxBiomass) {
        maxBiomass = val[1];
        specieWithMaxBiomass = val[0];
    }
  }


  printjson({ "reduceKey": key, "value": specieWithMaxBiomass })
  return specieWithMaxBiomass
}
