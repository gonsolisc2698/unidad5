var mapMain;
require([
  "esri/map",
  "esri/layers/FeatureLayer",
  "esri/tasks/ServiceAreaTask",
  "esri/tasks/ServiceAreaParameters",
  "esri/tasks/query",
  "esri/tasks/FeatureSet",
  "esri/symbols/SimpleFillSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/Color",
  "esri/dijit/Search",
  "dojo/domReady!",
], function (
  Map,
  FeatureLayer,
  ServiceAreaTask,
  ServiceAreaParameters,
  Query,
  FeatureSet,
  SimpleFillSymbol,
  SimpleLineSymbol,
  Color,
  Search
) {
  mapMain = new Map("map", {
    basemap: "topo",
    center: [-3.69, 40.39],
    zoom: 12,
  });
  // map.on("click", solveResult);
  var urlcensalud =
    "https://services8.arcgis.com/BtkRLT3YBKaVGV3g/arcgis/rest/services/Centros_de_salud_(1)/FeatureServer/0";
  var Centros_de_salud = new FeatureLayer(urlcensalud);
  var elementos;

  mapMain.on("load", function (evt) {
    var query = new Query();
    query.where = "1=1";
    Centros_de_salud.queryFeatures(query, function (objectIds) {
     console.log("objectIds", objectIds);
     elementos = objectIds
    });
  });
  mapMain.addLayer(Centros_de_salud);
  params = new ServiceAreaParameters();
  params.defaultBreaks = [5];
  params.outSpatialReference = map.spatialReference;
  params.returnFacilities = false;

  servicioarea = new ServiceAreaTask(
    "https://formacion.esri.es/server/rest/services/RedMadrid/NAServer/Service%20Area"
  );
  var features = elementos;
  var facilities = new FeatureSet();
  facilities.features = features;
  params.facilities = facilities;

  mapMain.on('click', function() {
    console.log('params', params)
    servicioarea.solve(params,function(solveResult){
        var polygonSymbol = new SimpleFillSymbol(
          "solid",
          new SimpleLineSymbol("solid", new Color([232,104,80]), 5),
          new Color([232,104,80,0.25]),
          new Color([245, 176, 65, 0.25 ]),

        );
        arrayUtils.forEach(solveResult.serviceAreaPolygons, function(servicioarea){
          serviceAreaTask.setSymbol(polygonSymbol);
          map.graphics.add(servicioarea);
        });
      });
  });
  var busqueda = new Search(
    {
    map: map,
    },
    "divSearch"
    );
    busqueda.startup(); 

  
  
});
