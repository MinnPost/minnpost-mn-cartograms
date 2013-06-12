minnpost-mn-cartograms
======================

Cartograms of Minnesota

## Data

* Population data from http://www.gis.leg.mn/metadata/county2010.htm

## Data processing

* ogr2ogr -f GeoJSON -t_srs EPSG:4326 ./data/mn-county2010.geo.json ./data/mn-county2010.shp/county2010.shp
* topojson -o ./data/mn-county2010.topo.json --id-property=DATA -p=POPULATION ./data/mn-county2010.geo.json