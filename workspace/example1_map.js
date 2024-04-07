function() {
  var year = this.date.split("/")[2];
  var key = { area: this.area, year: year };
  printjson({"mapKey": key});
  emit(key, 1);
}
