function() {
  var year = this.date.split("/")[2];
  var key = { area: this.area, year: year };
  if (this.biomass_value !== "ERROR") {
    // printjson({"mapKey": key, "value": [this.biomass_value,this.area_km2]});
    valueObj = {
      biomass_sum: this.biomass_value,
      area_km2_sum: this.area_km2,
    }
    emit(key, valueObj);
  }
}
