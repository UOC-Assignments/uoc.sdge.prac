function(key, values) {
  const biomassBySpecies = values.reduce((acc, currentDict) => {
    Object.keys(currentDict).forEach(key => {
        const value = currentDict[key];
        if (acc[key]) {
            // Round to two decimal places during each addition
            acc[key] = +(acc[key] + value).toFixed(2);
        } else {
            acc[key] = value;
        }
    });
    return acc;
}, {});

  // printjson({
  //   "reduceKey": key,
  //   "biomassBySpecies": biomassBySpecies,
  // });
  return (biomassBySpecies);
}
