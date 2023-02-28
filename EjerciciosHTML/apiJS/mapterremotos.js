require([
    "esri/map",
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/dijit/PopupTemplate",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/renderers/SimpleRenderer",
    "esri/Color",
    "dojo/parser",
    "dojo/domReady!",
  ], function (
    map,
    ArcGISDynamicMapServiceLayer,
    FeatureLayer,
    PopupTemplate,
    SimpleLineSymbol,
    SimpleMarkerSymbol,
    SimpleRenderer,
    Color,
    parser
  ) {
        // Parse DOM nodes decorated with the data-dojo-type attribute
        parser.parse();

        // Create the map
        var mapMain = new map("divMap", {
            basemap: "topo",
            center: [-119.65, 36.87],
            zoom: 8,
        });
        // Construct the USA layer
        var urlUSA =
        "http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer";
        var urlTerremotos =
        "http://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/Earthquakes/FeatureServer/0";
        var USA = new ArcGISDynamicMapServiceLayer(urlUSA, {
            opacity: 0.3,
        });
        USA.setVisibleLayers([0, 1, 3]);

        var popupTerremoto = new PopupTemplate({
            title: "Terremoto de magnitud <br> {MAGNITUDE}",
            description: "{PLACE}, <br> EEUU",
            fieldInfos: [
              { fieldName: "MAGNITUDE", format: { places: 0, digitSeparator: true } },
            ],
        });
        
        var Terremoto = new FeatureLayer(urlTerremotos, {
            infoTemplate: popupTerremoto,
            outFields: ["FID", "MAGNITUDE", "PLACE"],
        });
        var line = new SimpleLineSymbol();
        line.setWidth(0);
        var symbolTerremoto = new SimpleMarkerSymbol();
        symbolTerremoto.setOutline(line);
        symbolTerremoto.setColor(new Color([230, 0, 0, 0.5]));
      
        var rendererTerremoto = new SimpleRenderer(symbolTerremoto);
      
        var tamañoVV = {
          type: "sizeInfo",
          field: "MAGNITUDE",
          minDataValue: 1,
          maxDataValue: 10,
          minSize: 5,
          maxSize: 100,
        };
        rendererTerremoto.setVisualVariables([tamañoVV]);
        Terremoto.setRenderer(rendererTerremoto);

        mapMain.addLayers([USA, Terremoto]);

    }
);
