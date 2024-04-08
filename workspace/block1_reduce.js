function(key, values) {
  var reduceObj = {
    biomass: 0.0,
    area_km2: 0.0
  }

  for (i in values) {
    reduceObj.biomass = reduceObj.biomass + values[i].biomass;
    reduceObj.area_km2 = reduceObj.area_km2 + values[i].area_km2;
  }
  // printjson({
  //   "reduceKey": key,
  //   "biomass": reduceObj.biomass,
  //   "area_km2": reduceObj.area_km2,
  // });
  return (reduceObj);
}
