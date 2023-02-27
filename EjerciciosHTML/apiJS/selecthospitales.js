
 require([
        "esri/map",
        "esri/layers/FeatureLayer",
        "esri/tasks/query",
        "esri/symbols/SimpleMarkerSymbol",
        "esri/Color",
        "esri/renderers/SimpleRenderer",
        "dojo/domReady!",
      ], function(
        Map,
        FeatureLayer,
        Query,
        SimpleMarkerSymbol,
        Color,
        SimpleRenderer
      ) {
         var map = new Map("map", {
          basemap: "streets-vector",
          center: [-3, 40],
          zoom: 5
        
        });
        var marker = new SimpleMarkerSymbol();
        marker.setColor(new Color([0, 77, 168, 1])); 
        var rendererHospitales = new SimpleRenderer(marker);
        var urlhospitales = 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0' 
        var Hospitales = new FeatureLayer(urlhospitales);

        Hospitales.renderer = rendererHospitales;

        map.addLayer(Hospitales);
        document.getElementById('provChange').addEventListener('change', selectProvincias)

        function selectProvincias() {
            var codigoProv = document.getElementById('provChange').value

            var consulta = new Query();
            consulta.where = "CODPROV = " + codigoProv;

            Hospitales.selectFeatures(consulta);
            var marker = new SimpleMarkerSymbol();
            marker.setColor( new Color ([163, 255, 115, 1]));
            marker.setStyle(SimpleMarkerSymbol.STYLE_DIAMOND);
        
            Hospitales.setSelectionSymbol(marker)
            
        }
        
      });
      