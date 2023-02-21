require(
    ["esri/map", 
    "esri/dijit/Search",
    "dojo/parser", 
    "dojo/domReady!"], 
    function (Map, Search,  parser) {
        // Parse DOM nodes decorated with the data-dojo-type attribute
        parser.parse();
        var map = new Map('cpCenter', {
            basemap: 'topo-vector',
            center: [-3, 40],
            zoom: 6
        });

        var s = new Search({
         map: map,
        },"divSearch");
    }
);