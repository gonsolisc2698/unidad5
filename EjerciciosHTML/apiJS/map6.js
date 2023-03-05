require(
    [
    "dojo/parser",
    "esri/map",
    "dojo/dom",
    "dojo/on",
    "esri/tasks/locator", 
    "esri/symbols/SimpleMarkerSymbol",
    "esri/Color",
    "esri/graphic",
    "esri/symbols/TextSymbol",
    "esri/symbols/Font",
    "dojo/domReady!"],
   function (parser, Map, dom, on, Locator,  SimpleMarkerSymbol, Color, Graphic, TextSymbol, Font) {
        // 1. Parse DOM nodes decorated with the data-dojo-type attribute
        parser.parse();
        // 1.1 Map centered at -117.19, 34.05
        var map = new Map('cpCenter', {
            basemap: 'streets-navigation-vector',
            center: [-117.19, 34.05],
            zoom: 5
        })
        //2. controlar cuándo el usuario ckicka sobre el botón
        //btnLocate
        var btn = dom.byId('btnLocate');
        on(btn, 'click', buscaDirreccion);
        //btn.addEvententListener('click', buscaDirreccion)

        //4. Instanciar y cargar el servicio (Locator)
        var locator = new Locator("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer");

        function buscaDirreccion(){
            //3. guardar en una variable lo que ha introducido un usuario
            var address = dom.byId('taAddress').value;
            console.log('buscaDirreccion', address);
            //5. montar parámetros para enviar al servicio
            var Params ={
                address: {"SingleLine": address},
                outFields: ["*"]
            }
            //6. ejecutar llamada al servicio de localización
            locator.addressToLocations(Params);

        };
        // 7. Cuando se ha completado la petición se ejecuta mostrarResultados
        locator.on('address-to-locations-complete', mostrarResultados);
        function mostrarResultados(results){ 
            console.log('Geocodificación completada', results);
            // Coordenadas del punto devuelto 
            //s(nos quedamos con el primer candidatos)
            var punto = results.addresses[0].location;
            console.log('punto', punto);
            // Definir simbología - arcgis playground js 3
            var marker = new SimpleMarkerSymbol();
            marker.setColor(new Color([230, 0, 169, 1]));
            // Montar el gráfico: simbología y localización
            var grafico = new Graphic(punto, marker);
            // Añadirlo a la capa gráfica que trae el propio mapa
            map.graphics.add(grafico);
            // s (nos quedamos con la dirrección del punto)
            var texto = results.addresses[0].address;
            console.log('texto', texto);
            // Definimos el texto, su tamaño, color y fuente
            var marker2 = new TextSymbol()
                marker2.setText(texto);
                marker2.setOffset(0, -25);
                marker2.setColor(new Color([128,0,0]));
                marker2.setFont(new Font("12pt").setWeight(Font.WEIGHT_BOLD));
            // montar el gráfico del texto 
            var grafico2 = new Graphic(punto, marker2);
            // Añadirlo a la capa gráfica que trae el propio mapa
            map.graphics.add(grafico2);
            // hacemos zoom en el punto seleccionado y su texto
            map.centerAndZoom(punto, 16);
        }
    }   


);
