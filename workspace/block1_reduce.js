function(key, values) {

  printjson({"reduceKey": key, "values Matrix": values});

  let biomass_values = [];
  let area_km2_values = [];

  values.forEach(row => {
    biomass_values.push(row[0]);
    area_km2_values.push(row[1]);
  });

  // printjson({"reduceKey": key,
  //            "biomass_values": biomass_values,
  //            "area_km2_values": area_km2_values,
  //            "biomass_sum": Array.sum(biomass_values),
  //            "area_km2_sum": Array.sum(area_km2_values)});

  return Array.sum(biomass_values)/Array.sum(area_km2_values);
  //return(values)
}
