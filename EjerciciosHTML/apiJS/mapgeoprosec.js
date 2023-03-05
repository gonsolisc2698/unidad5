var mapMain;

require([
        "esri/map",
        "esri/tasks/Geoprocessor",
        "esri/graphic",
        "esri/graphicsUtils",
        "esri/tasks/FeatureSet",
        "esri/tasks/LinearUnit",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",
        "esri/symbols/SimpleFillSymbol",
        "esri/Color",
        "dojo/parser",
        "dojo/domReady!"],
        function (Map,  
          Geoprocessor, Graphic, graphicsUtils, FeatureSet, LinearUnit, SimpleMarkerSymbol, SimpleLineSymbol, 
        SimpleFillSymbol, Color, parser) {
            // Parse DOM nodes decorated with the data-dojo-type attribute
            parser.parse();


            // Create the map
            mapMain = new Map("divMap", {
                basemap: "topo",
                center: [-122.45, 37.75],
                zoom: 12
            });
            var gp = new Geoprocessor
            // no funciona url https://sampleserver6.arcgisonline.com/arcgis/rest/services/Viewshed/GPServer/Viewshed
            //funcionaurl http://sampleserver6.arcgisonline.com/arcgis/rest/services/Elevation/ESRI_Elevation_World/GPServer/Viewshed
            ("http://sampleserver6.arcgisonline.com/arcgis/rest/services/Elevation/ESRI_Elevation_World/GPServer/Viewshed");
            gp.setOutputSpatialReference({
                wkid: 102100
              });
            mapMain.on("click", computeViewShed);

            function computeViewShed(evt) {
              mapMain.graphics.clear();
              var pointSymbol = new SimpleMarkerSymbol();
              pointSymbol.setSize(12);
              pointSymbol.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 1));
              pointSymbol.setColor(new Color([0, 255, 0, 0.25]));
      
              var graphic = new Graphic(evt.mapPoint, pointSymbol);
              mapMain.graphics.add(graphic);
      
              var elemento = [];
              elemento.push(graphic);
              var featureSetprueba = new FeatureSet();
              featureSetprueba.features = elemento;
              var viewsDistance = new LinearUnit();
              viewsDistance.distance = 5000.0;
              viewsDistance.units = "esriMeters";
              var params = {
                "Input_Observation_Point": featureSetprueba,
                "Viewshed_Distance": viewsDistance
              };
              gp.execute(params, drawViewshed);
            }
      
            function drawViewshed(results, messages) {
            console.log(results)
              var polySymbol = new SimpleFillSymbol();
              polySymbol.setOutline(new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([0, 0, 0, 0.4]), 1));
              polySymbol.setColor(new Color([255, 127, 0, 0.4]));
              var features = results[0].value.features;
              for (var f = 0, fl = features.length; f < fl; f++) {
                var feature = features[f];
                feature.setSymbol(polySymbol);
                mapMain.graphics.add(feature);
              }
              mapMain.setExtent(graphicsUtils.graphicsExtent(mapMain.graphics.graphics), true);
          }
        });

       