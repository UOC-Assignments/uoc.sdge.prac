function(key, value) {
  //printjson({"reduceKey": key, "reduceValue": value})
  result = value.biomass_sum / value.area_km2_sum
  printjson({ "reduceKey": key, "value": result })
  return result
}
