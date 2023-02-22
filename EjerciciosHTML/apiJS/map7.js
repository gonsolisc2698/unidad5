require(
    ["dojo/parser",
    "esri/map",
    "esri/dijit/Directions",
    "dojo/domReady!"], 
    function (parser, Map, Directions) {
    // 1. Parse DOM nodes decorated with the data-dojo-type attribute
    parser.parse();
    var map = new Map('cpCenter', {
        basemap: 'streets-navigation-vector',
        center: [-117.19, 34.05],
        zoom: 5
    })
    var directionsWidget = new Directions({
        map: map,
        routeTaskUrl: 'http://utility.arcgis.com/usrsvcs/appservices/OM1GNiiACNJceMRn/rest/services/World/Route/NAServer/Route_World'
       }, "divDirections");
    directionsWidget.startup();
    }
);
  