function(key, values) {

  // printjson({"reduceKey": key, "values Array": clean_values});

  const biomass_values = values.map(item => item.biomass_value);
  const area_km2_values = values.map(item => item.area_km2_value);

  const biomass_clean_values = biomass_values.filter(item => Number.isFinite(item));
  const area_km2_clean_values = area_km2_values.filter(item => Number.isFinite(item));

  printjson({"reduceKey": key,
             "biomass_values": biomass_clean_values,
             "area_km2_values": area_km2_clean_values,
             "biomass_sum": Array.sum(biomass_clean_values),
             "area_km2_sum": Array.sum(area_km2_clean_values)});

  return Array.sum(biomass_clean_values)/Array.sum(area_km2_clean_values);
}
