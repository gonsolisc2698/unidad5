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

        var search = new Search({
         map: map,
         maxSuggestions: 2,
         minCharacters: 4,
        },"divSearch");
    }
);