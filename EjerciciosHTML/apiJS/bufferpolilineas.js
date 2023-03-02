var mapMain
require(["esri/map", 
    "dojo/_base/array",
    "esri/SpatialReference",
    "esri/tasks/GeometryService",
    "esri/toolbars/draw",
    "esri/symbols/SimpleLineSymbol",
    "esri/symbols/SimpleFillSymbol",
    "esri/graphic",
    "esri/Color",
    "esri/tasks/BufferParameters",
    "dojo/parser",
    "dojo/domReady!"],
    function(Map, array, SpatialReference, GeometryService,  Draw, SimpleLineSymbol, SimpleFillSymbol, Graphic, Color, BufferParameters,  parser) {
        parser.parse();

        // Create the map
        mapMain = new Map("divMap", {
            basemap: "topo",
            center: [2.10, 41.22],
            zoom: 10
        });
        mapMain.spatialReference = new SpatialReference({wkid: 25830})
        var geomService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"); 
        function initToolbar() {
            console.log('a')

            tb = new Draw(mapMain);
            tb.on("draw-end", doBuffer);
            tb.activate(Draw.POLYLINE);
        }
        mapMain.on("load", initToolbar)
        function doBuffer(evt) {
            tb.deactivate();
            var geometry = evt.geometry, symbol;
            var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASH, new Color([255,0,0]), 1);
            var params = new BufferParameters();
            params.distances = [5];
            params.outSpatialReference = mapMain.spatialReference;
            params.unit = GeometryService.UNIT_KILOMETER;
            params.geometries = [evt.geometry]
            var graphic = new Graphic(geometry, symbol);
            mapMain.graphics.add(graphic);
            geomService.buffer(params, showBuffer)
        }
        function showBuffer(evt) {
            console.log("hola")
            console.log(evt)
            var Fill = new SimpleFillSymbol(
            SimpleFillSymbol.STYLE_SOLID,
            new SimpleLineSymbol(
                SimpleLineSymbol.STYLE_SOLID,
                new Color([255,0,0,0.65]), 
            ),
            );
            var graphico = new Graphic(evt[0], Fill);
            mapMain.graphics.add(graphico);
        }

    });