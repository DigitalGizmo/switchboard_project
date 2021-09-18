// Switchboard js

function showPlugs () {

    let startX = 400, startY = 630, width = 85, height = 120;

    const gridSvg = d3.select('#switchboard-grid');


    // drag border and clip with it
    const drag = d3.drag()
        .on("drag", function() {
            const pluggy = d3.select('#plug1');
            pluggy.attr('x', +pluggy.attr('x') + d3.event.dx);
            pluggy.attr('y', +pluggy.attr('y') + d3.event.dy);
        });

    // Add plug
    gridSvg.append("svg:rect")
        .attr("id", "plug1")
        // rectangle
        .attr('x', startX + 200)
        .attr('y', startY)
        .attr('width', width)
        .attr('height', height)
        .style('fill-opacity', 90)
        .style('fill', '#4D4D4D')
        // Plug part
        // .append('svg:line')
        // .style('stroke-width', 10)
        // .attr('x1', (startY + (width/2)))
        // .attr('y1', startY)
        // .attr('x2', (startY + (width/2)))
        // .attr('y2', startY - 30)
        // // Make dragable
        .style('cursor', 'move')
        .call(drag)
        ;

    // Mulit-part plug
    const plug = gridSvg.append('g')
        .attr('id', 'plug2')
        .attr('transform', 'translate(' + startX + ', ' + startY + ')')
        ;

    plug.append('rect')
        .attr('width', width)
        .attr('height', height)
        ;

    plug.append('text')
        .attr('x', 5)
        .attr('y', height/2)
        .attr('fill', 'white')
        .style('font-size', 20)
        .text('Plug-In')
        ;


}
