
      var map;

      require([
        "esri/map",
        "esri/tasks/GeometryService",

        "esri/layers/ArcGISTiledMapServiceLayer",
        "esri/layers/FeatureLayer",

        "esri/Color",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/symbols/SimpleLineSymbol",

        "esri/dijit/editing/Editor",
        "esri/dijit/editing/TemplatePicker",

        "esri/config",
        "dojo/i18n!esri/nls/jsapi",

        "dojo/_base/array", "dojo/parser", "dojo/keys",

        "dijit/layout/BorderContainer", "dijit/layout/ContentPane",
        "dojo/domReady!"
      ], function(
        Map, GeometryService,
        ArcGISTiledMapServiceLayer, FeatureLayer,
        Color, SimpleMarkerSymbol, SimpleLineSymbol,
        Editor, TemplatePicker,
        esriConfig, jsapiBundle,
        arrayUtils, parser, keys
      ) {
        parser.parse();

        // snapping is enabled for this sample - change the tooltip to reflect this
        jsapiBundle.toolbars.draw.start = jsapiBundle.toolbars.draw.start +  "<br>Press <b>ALT</b> to enable snapping";

        //This service is for development and testing purposes only. We recommend that you create your own geometry service for use within your applications.
        esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");

        map = new Map("divMap", {
          basemap: "satellite",
          center: [-96.541, 38.351],
          zoom: 14,
          slider: true
        });

        map.on("layers-add-result", initEditor);
        //add boundaries and place names
        var labels = new 
        ArcGISTiledMapServiceLayer
        ("https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer");
        map.addLayer(labels);

        var responsePoints = new  
        FeatureLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/0",   {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ['*']
        });
        
        var responsePolys = new 
        FeatureLayer("https://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/2", {
          mode: FeatureLayer.MODE_ONDEMAND,
          outFields: ['*']
        });
        var responseLines = new 
        FeatureLayer("http://sampleserver6.arcgisonline.com/arcgis/rest/services/Wildfire/FeatureServer/1",{ 
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ['*']
        });
        map.addLayers([responsePolys, responsePoints,   responseLines]);

        function initEditor(evt) {
          var templateLayers = arrayUtils.map(evt.layers, function(result){
            return result.layer;
          });
          var templatePicker = new TemplatePicker({
            featureLayers: templateLayers,
            grouping: true,
            columns: 2,
            rows: "auto"
          }, "templateDiv");
          templatePicker.startup();

          var layers = arrayUtils.map(evt.layers, function(result) {
            return { featureLayer: result.layer };
          });
          var settings = {
            map: map,
            templatePicker: templatePicker,
            layerInfos: layers,
            toolbarVisible: true,
            createOptions: {
              polylineDrawTools:[ Editor.CREATE_TOOL_FREEHAND_POLYLINE ],
              polygonDrawTools: [ Editor.CREATE_TOOL_FREEHAND_POLYGON,
                Editor.CREATE_TOOL_CIRCLE,
                Editor.CREATE_TOOL_TRIANGLE,
                Editor.CREATE_TOOL_RECTANGLE
              ]
            },
            toolbarOptions: {
              reshapeVisible: true
            }
          };

          var params = { settings: settings };
          var myEditor = new Editor(params, 'editorDiv');
          //define snapping options
          var symbol = new SimpleMarkerSymbol(
            SimpleMarkerSymbol.STYLE_CROSS,
            15,
            new SimpleLineSymbol(
              SimpleLineSymbol.STYLE_SOLID,
              new Color([255, 0, 0, 0.5]),
              5
            ),
            null
          );
          map.enableSnapping({
            snapPointSymbol: symbol,
            tolerance: 20,
            snapKey: keys.ALT
          });

          myEditor.startup();
        }
      });