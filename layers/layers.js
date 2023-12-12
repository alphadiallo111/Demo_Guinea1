var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CARTEDEBOKE_1 = new ol.format.GeoJSON();
var features_CARTEDEBOKE_1 = format_CARTEDEBOKE_1.readFeatures(json_CARTEDEBOKE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CARTEDEBOKE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARTEDEBOKE_1.addFeatures(features_CARTEDEBOKE_1);
var lyr_CARTEDEBOKE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CARTEDEBOKE_1, 
                style: style_CARTEDEBOKE_1,
                interactive: true,
                title: '<img src="styles/legend/CARTEDEBOKE_1.png" /> CARTE DE BOKE'
            });
var format_ZONE_ETUDE_2 = new ol.format.GeoJSON();
var features_ZONE_ETUDE_2 = format_ZONE_ETUDE_2.readFeatures(json_ZONE_ETUDE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONE_ETUDE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONE_ETUDE_2.addFeatures(features_ZONE_ETUDE_2);
var lyr_ZONE_ETUDE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONE_ETUDE_2, 
                style: style_ZONE_ETUDE_2,
                interactive: true,
                title: '<img src="styles/legend/ZONE_ETUDE_2.png" /> ZONE_ETUDE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_CARTEDEBOKE_1.setVisible(true);lyr_ZONE_ETUDE_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_CARTEDEBOKE_1,lyr_ZONE_ETUDE_2];
lyr_CARTEDEBOKE_1.set('fieldAliases', {'fid': 'fid', 'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_ZONE_ETUDE_2.set('fieldAliases', {'fid': 'fid', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_CARTEDEBOKE_1.set('fieldImages', {'fid': 'TextEdit', 'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_ZONE_ETUDE_2.set('fieldImages', {'fid': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_CARTEDEBOKE_1.set('fieldLabels', {'fid': 'no label', 'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_ZONE_ETUDE_2.set('fieldLabels', {'fid': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_ZONE_ETUDE_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});