require(
    ["esri/map", "dojo/dom", "esri/geometry/Point",
    "dojo/on",
     "dojo/domReady!"],
    function(Map, dom, Point, on){
        var myMap = new Map('divMap', {
            basemap: 'satellite', 
            center:[-3, 40],
            scale:"20000",
            //zoom:15
        });

 

    var boton = dom.byId('btn'); //=document.gelElementById
       //Evento con dojo On
    //    on(boton, 'click', goTo);
        boton.addEventListener('click', goTo);
        function goTo(){
            var point = new Point(-3.67, 40.42);
            myMap.centerAt(point);
        }
        //myMap.on('extent-change', showExtent);
        //function showExtent(){
            //console.log('extensión  del mapa cambiada');
        //}
        myMap.on('zoom-end', showZoom);
        function showZoom(){
            console.log('a');
            var zoom = myMap.getZoom();
            dom.byId('level').innerHTML = zoom;
        }
    }
);