function() { 
  var year = this.date.split("/")[2];
  var key = { year: year, species: this.scientific_name};
  if (this.biomass_value !== "ERROR") {
    //printjson({"mapKey": key, "value": this.biomass_value});
    emit(key, this.biomass_value);
  }
}