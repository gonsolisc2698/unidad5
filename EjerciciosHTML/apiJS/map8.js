require(
    [
    "esri/map",
     "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/symbols/SimpleFillSymbol",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/toolbars/draw",
    "esri/graphic",
    "esri/Color",
    "esri/tasks/query",
    "dojo/parser",
     "dojo/domReady!"], 
    function (Map, ArcGISDynamicMapServiceLayer, FeatureLayer, SimpleFillSymbol, SimpleLineSymbol, SimpleMarkerSymbol, Draw, Graphic, Color, Query, parser) {
        // Parse DOM nodes decorated with the data-dojo-type attribute
        parser.parse();

        var myMap = new Map("divMap", {
            basemap: 'satellite',
           center: [-98.57, 39.83],
            zoom: 5
        });
        //url1
        var USA = new ArcGISDynamicMapServiceLayer('http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer', {
            opacity: 0.3,
        });
        // Construct the USA layer - Ocultar capa de estados
        USA.setVisibleLayers([0,1,3])

       //url2
        var urlTerremotos = 'https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Earthquakes/FeatureServer/0'
        var Terremotos = new FeatureLayer(urlTerremotos);
        // Construct the Quakes layer - Mostrar solo los de magnitud mayor de 2
        Terremotos.setDefinitionExpression("MAGNITUDE > 2");

        myMap.addLayers([USA, Terremotos]);
     
        //  Wire the draw tool initialization function

        myMap.on('load', createToolbar)
        // Inicializar la herramienta de dibujo para pintar polígonos
        function createToolbar() {
            var toolbar = new Draw(myMap);
            toolbar.activate(Draw.POLYGON)

            toolbar.on("draw-end", displayPolygon);
        }
        // Mostrar el polígono dibujado
        function displayPolygon(results){
            var geometryInput = results.geometry;

            var tbDrawSymbol = new SimpleFillSymbol(
                SimpleFillSymbol.STYLE_SOLID,
                new SimpleLineSymbol(
                  SimpleLineSymbol.STYLE_DASHDOT,
                  new Color([255, 255, 0]),
                ),
                new Color([255, 255, 0, 0.2])
              );
            var graphic = new Graphic(geometryInput, tbDrawSymbol);
            myMap.graphics.add(graphic);

            selectEarthquakes(results.geometry)
        }

        function selectEarthquakes (geoInput) {
            var consulta = new Query();
            consulta.geometry = geoInput;

            Terremotos.selectFeatures(consulta);
            var marker = new SimpleMarkerSymbol();
            marker.setStyle(SimpleMarkerSymbol.STYLE_X);
        
            Terremotos.setSelectionSymbol(marker)
            
        }

    }
  );
  