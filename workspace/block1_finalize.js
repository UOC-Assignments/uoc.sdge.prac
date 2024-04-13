function(key, value) {
  result = value.biomass_sum / value.area_km2_sum
  //printjson({ "reduceKey": key, "value": result })
  return result
}
