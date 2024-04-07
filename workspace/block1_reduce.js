function(key, values) {
  //printjson({"reduceKey": key, "values": values});
  return Array.sum(values);
}
