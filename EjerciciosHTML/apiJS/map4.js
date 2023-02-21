var mapMain;
var legendLayers;
var webmapId;

require([
  "esri/arcgis/utils",
  "dojo/dom",
  "dojo/parser",
  "esri/dijit/Legend",
  "dojo/domReady!",
], 
function (arcgisUtils, dom, parser, Legend) {
  parser.parse();

  var webMap = arcgisUtils
  .createMap('7d987ba67f4640f0869acb82ba064228', id="cpCenter")
  .then(function(response){
    dom.byId('Title').innerHTML = response.itemInfo.item.title
    console.log('response', response.itemInfo.item.title);
    var leyenda = new Legend({
      map: response.map,
    }, 'divLegend');
    leyenda.startup();
  });
  
});