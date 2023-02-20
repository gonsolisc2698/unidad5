require(
    ["esri/map", 
    "esri/layers/ArcGISDynamicMapServiceLayer",
    "esri/layers/FeatureLayer",
    "esri/geometry/Extent",
    "esri/SpatialReference",
    "dojo/domReady!"],
    function (Map,
        ArcGISDynamicMapServiceLayer, 
        FeatureLayer, Extent, SpatialReference,){
        var myMap = new Map('viewDiv', {
            basemap: 'satellite',
            extent: new Extent(-122.68,45.53,-122.45,45.60,
                new SpatialReference({wkid:4326}))
        });
        var USA = new ArcGISDynamicMapServiceLayer('http://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer', {
            opacity: 0.4
        })
       
        var urlTerremotos = 'https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Earthquakes/FeatureServer/0'
        var Terremotos = new FeatureLayer(urlTerremotos);
        Terremotos.setDefinitionExpression("MAGNITUDE > 2");

        //myMap.addLayer(USA);
        //myMap.addLayer(Terremotos);
        myMap.addLayers([USA,Terremotos]);

    }

    );