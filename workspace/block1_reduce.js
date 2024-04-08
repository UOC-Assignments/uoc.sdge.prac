function(key, values) {

  var reduceObj = {
    biomass_sum: 0.0,
    area_km2_sum: 0.0
  }

  for (i in values) {
    reduceObj.biomass_sum = reduceObj.biomass_sum + values[i].biomass_sum;
    reduceObj.area_km2_sum = reduceObj.area_km2_sum + values[i].area_km2_sum;
    // printjson({
    //   "reduceKey": key,
    //   "biomass_values": values[i].biomass_value,
    //   "area_km2_values": values[i].area_km2_value,
      // "biomass_sum": Array.sum(biomass_clean_values),
      // "area_km2_sum": Array.sum(area_km2_clean_values)
  //});
  }
  // printjson({
  //   "reduceKey": key,
  //   "biomass_sum": reduceObj.biomass_sum,
  //   "area_km2_sum": reduceObj.area_km2_sum,
  // });


  //return({ biomass_value: this.biomass_value, area_km2_value: this.area_km2 })
  return (reduceObj);
  //return(values)
}
