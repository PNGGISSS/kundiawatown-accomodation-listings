ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([16128035.927055, -678112.959280, 16148290.166066, -664230.840408]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Hotel_1 = new ol.format.GeoJSON();
var features_Hotel_1 = format_Hotel_1.readFeatures(json_Hotel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_1.addFeatures(features_Hotel_1);
var lyr_Hotel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_1, 
                style: style_Hotel_1,
                popuplayertitle: "Hotel",
                interactive: true,
                title: '<img src="styles/legend/Hotel_1.png" /> Hotel'
            });
var format_Lodge_2 = new ol.format.GeoJSON();
var features_Lodge_2 = format_Lodge_2.readFeatures(json_Lodge_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lodge_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lodge_2.addFeatures(features_Lodge_2);
var lyr_Lodge_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lodge_2, 
                style: style_Lodge_2,
                popuplayertitle: "Lodge",
                interactive: true,
                title: '<img src="styles/legend/Lodge_2.png" /> Lodge'
            });
var format_GuestHouse_3 = new ol.format.GeoJSON();
var features_GuestHouse_3 = format_GuestHouse_3.readFeatures(json_GuestHouse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GuestHouse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GuestHouse_3.addFeatures(features_GuestHouse_3);
var lyr_GuestHouse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GuestHouse_3, 
                style: style_GuestHouse_3,
                popuplayertitle: "GuestHouse",
                interactive: true,
                title: '<img src="styles/legend/GuestHouse_3.png" /> GuestHouse'
            });
var format_Resort_4 = new ol.format.GeoJSON();
var features_Resort_4 = format_Resort_4.readFeatures(json_Resort_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resort_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resort_4.addFeatures(features_Resort_4);
var lyr_Resort_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resort_4, 
                style: style_Resort_4,
                popuplayertitle: "Resort",
                interactive: true,
                title: '<img src="styles/legend/Resort_4.png" /> Resort'
            });
var format_Motel_5 = new ol.format.GeoJSON();
var features_Motel_5 = format_Motel_5.readFeatures(json_Motel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Motel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Motel_5.addFeatures(features_Motel_5);
var lyr_Motel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Motel_5, 
                style: style_Motel_5,
                popuplayertitle: "Motel",
                interactive: true,
                title: '<img src="styles/legend/Motel_5.png" /> Motel'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Hotel_1.setVisible(true);lyr_Lodge_2.setVisible(true);lyr_GuestHouse_3.setVisible(true);lyr_Resort_4.setVisible(true);lyr_Motel_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Hotel_1,lyr_Lodge_2,lyr_GuestHouse_3,lyr_Resort_4,lyr_Motel_5];
lyr_Hotel_1.set('fieldAliases', {'id': 'id', 'Hotel': 'Hotel', 'Price': 'Price', 'Service': 'Service', 'Phone': 'Phone', 'Email': 'Email', });
lyr_Lodge_2.set('fieldAliases', {'id': 'id', 'Lodge': 'Lodge', 'Price': 'Price', 'Contact': 'Contact', 'Email': 'Email', });
lyr_GuestHouse_3.set('fieldAliases', {'id': 'id', 'G.House': 'G.House', 'Price': 'Price', 'Phone': 'Phone', 'Email': 'Email', });
lyr_Resort_4.set('fieldAliases', {'id': 'id', 'Resort': 'Resort', 'Price': 'Price', 'Services': 'Services', 'Phone': 'Phone', 'Email': 'Email', });
lyr_Motel_5.set('fieldAliases', {'id': 'id', 'Motel': 'Motel', 'Price': 'Price', 'Service': 'Service', 'Phone': 'Phone', 'Email': 'Email', });
lyr_Hotel_1.set('fieldImages', {'id': 'TextEdit', 'Hotel': 'TextEdit', 'Price': 'TextEdit', 'Service': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', });
lyr_Lodge_2.set('fieldImages', {'id': 'TextEdit', 'Lodge': 'TextEdit', 'Price': 'TextEdit', 'Contact': 'TextEdit', 'Email': 'TextEdit', });
lyr_GuestHouse_3.set('fieldImages', {'id': 'TextEdit', 'G.House': 'TextEdit', 'Price': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', });
lyr_Resort_4.set('fieldImages', {'id': 'TextEdit', 'Resort': 'TextEdit', 'Price': 'TextEdit', 'Services': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', });
lyr_Motel_5.set('fieldImages', {'id': 'TextEdit', 'Motel': 'TextEdit', 'Price': 'TextEdit', 'Service': 'TextEdit', 'Phone': 'TextEdit', 'Email': 'TextEdit', });
lyr_Hotel_1.set('fieldLabels', {'id': 'no label', 'Hotel': 'inline label - always visible', 'Price': 'inline label - always visible', 'Service': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_Lodge_2.set('fieldLabels', {'id': 'no label', 'Lodge': 'inline label - always visible', 'Price': 'inline label - always visible', 'Contact': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_GuestHouse_3.set('fieldLabels', {'id': 'no label', 'G.House': 'inline label - visible with data', 'Price': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_Resort_4.set('fieldLabels', {'id': 'no label', 'Resort': 'inline label - always visible', 'Price': 'inline label - always visible', 'Services': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_Motel_5.set('fieldLabels', {'id': 'no label', 'Motel': 'inline label - always visible', 'Price': 'inline label - always visible', 'Service': 'inline label - always visible', 'Phone': 'inline label - always visible', 'Email': 'inline label - always visible', });
lyr_Motel_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});