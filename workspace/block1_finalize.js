function(key, value) {
  //printjson({"reduceKey": key, "Value": value})
  result = value.biomass / value.area_km2
  printjson({ "reduceKey": key, "value": result })
  return result
}
