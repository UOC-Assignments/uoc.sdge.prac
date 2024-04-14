function() {
  var key = { campaign: this.campaign };
  if (this.biomass_value !== "ERROR") {
    value = {
      [this.scientific_name]: this.biomass_value
    }
    // printjson({"mapKey": key, "value": biomassBySpecies});
    emit(key, value);
  }
}
