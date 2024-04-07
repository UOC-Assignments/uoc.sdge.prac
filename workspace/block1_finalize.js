function(key, value) {
  printjson({"reduceKey": key, "value": value})
  return value
}
