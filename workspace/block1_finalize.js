function(key, value) {
  result = value.biomass / value.area_km2
  // printjson({ "reduceKey": key, "value": result })
  return result
}
