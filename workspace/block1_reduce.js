function(key, values) {
  var result = {
    biomass_sum: 0.0,
    area_km2_sum: 0.0,
  }

  for (val of values) {
    result.biomass_sum = result.biomass_sum + val.biomass_sum;
    result.area_km2_sum = result.area_km2_sum + val.area_km2_sum;
  }
  // printjson({
  //   "reduceKey": key,
  //   "biomass": result.biomass_sum,
  //   "area_km2": result.area_km2_sum,
  // });
  return (result);
}
