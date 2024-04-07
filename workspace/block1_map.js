function() {
  var year = this.date.split("/")[2];
  var key = { area: this.area, year: year };
  if (this.biomass_value !== "ERROR") {
    //printjson({"mapKey": key, "value": this.biomass_value});
    biomass_per_km2 = this.biomass_value / this.area_km2
    emit(key, biomass_per_km2);
  }
}
