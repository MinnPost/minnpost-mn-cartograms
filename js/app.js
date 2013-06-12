/**
 *
 */

(function($, undefined) {

  var map = d3.select('#mn-map').append('svg')
    .attr('width', 400)
    .attr('height', 400);
  
  var zoom = d3.behavior.zoom()
    .translate([-38, 32])
    .scale(.94)
    .scaleExtent([0.5, 10.0])
    .on('zoom', updateZoom);
  
  function updateZoom() {
    var scale = zoom.scale();
    layer.attr('transform',
      'translate(' + zoom.translate() + ') ' +
      'scale(' + [scale, scale] + ')');
  }
    
  var proj = d3.geo.albersUsa();
  carto = d3.cartogram()
    .projection(proj)
    .value(function(d) {
      console.log(d);
      //return d.POPULATION;
      return Math.random() * 100;
    });
  
  // Get data
  d3.json('./data/mn-county2010.topo.json', function(topo) {
    console.log(topo);
  
    var features = carto(topo, topo.objects['mn-county2010.geo'].geometries);
    map.selectAll('path')
      .data(features)
      .enter()
      .append('path')
        .attr('d', carto.path);
  });
  
})(jQuery);