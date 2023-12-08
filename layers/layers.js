var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_clip_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/clip_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8826074.054827, 1371784.391940, 8944103.637149, 1524118.263489]
                            })
                        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.208000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_clip_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_clip_1,lyr_OpenStreetMap_2];
