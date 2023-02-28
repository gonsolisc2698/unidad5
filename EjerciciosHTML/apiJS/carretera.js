require(
    ["esri/map",
   "esri/layers/FeatureLayer",
   "esri/renderers/UniqueValueRenderer",
   "esri/Color",
   "esri/symbols/SimpleLineSymbol",
   "esri/dijit/Legend",
   "dojo/parser",
    "dojo/domReady!"],
    function (Map, FeatureLayer, UniqueValueRenderer, Color, SimpleLineSymbol, Legend, parser){
        parser.parse();
        var mapMain = new Map("divMap", {
            basemap: "topo",
            center: [0.10, 38.84],
            zoom: 12,
        });
        var urlcarreteras =
        'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Red_de_carreteras_en_Espa%c3%b1a/FeatureServer/0'
        var layer = new FeatureLayer(urlcarreteras, {
        //   mode: FeatureLayer.claseD,
        //   outFields: "*",
        //   infoTemplate: template
        });
        var renderer = new UniqueValueRenderer(null, "claseD");
        function createSymbol (color) {
            return new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color(color), 1);
        }
        renderer.addValue({
            value: "Carretera convencional",
            symbol: createSymbol("#ff6600"),
          });
        renderer.addValue({
            symbol: createSymbol("#fffc66"),
            value: "Autovía",
          });
        renderer.addValue({
            symbol: createSymbol("#3e6dbf"),
            value: "Autopista",
          });
        renderer.addValue({
            symbol: createSymbol("#ff004f"),
            value: "Carretera multicarril",
          });
        renderer.addValue({
            symbol: createSymbol("#fdcf60"),
            value: "Urbano",
          });
        renderer.addValue({
            symbol: createSymbol("#c7d1af"),
            value: "Senda",
          });
        renderer.addValue({
            symbol: createSymbol("#5c9665"),
            value: "Carril bici",
          });
        renderer.addValue({
            symbol: createSymbol("#ffffcc"),
            value: "Camino",
          });
        renderer.addValue({
            symbol: createSymbol("#ffbf20"),
            value: "Otros",
          });
        
        
        layer.setRenderer(renderer);

        mapMain.addLayer(layer);
        mapMain.on("load", function(evt){
            var legend = new Legend({
              map: mapMain,
              layerInfos: [{
                layer: layer,
                title: "Tipo de carreteras"
              }]
            }, "legendDiv");
        
            legend.startup();
          }); 
  
    }
);