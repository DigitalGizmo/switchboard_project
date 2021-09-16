// Switchboard js

function showPlugs () {

    let startX = 400, startY = 630

    const gridSvg = d3.select('#switchboard-grid');


    // drag border and clip with it
    const drag = d3.drag()
        .on("drag", function() {
            const pluggy = d3.select('#plug1');
            pluggy.attr('x', +pluggy.attr('x') + d3.event.dx);
            pluggy.attr('y', +pluggy.attr('y') + d3.event.dy);
        });

    // Add a plug
    gridSvg.append("svg:rect")
        .attr("id", "plug1")
        .attr('x', startX)
        .attr('y', startY)
        .attr('width', 85)
        .attr('height', 150)
        .attr('rx', 15)
        .attr('ry', 15)
        .style("fill-opacity", 90)
        .style("stroke", "#7d7664")
        .style("stroke-width", 1)
        .style('cursor', 'move')
        .call(drag);
        ;

}
