// Switchboard js

function showPlugs () {

    let startX = 400, startY = 630, width = 85, height = 120;

    const gridSvg = d3.select('#switchboard-grid');

    const drag = d3.drag()
        .on("drag", function(d) {
            d3.select('#plug2').attr("transform", "translate(" +
            (d.x = d3.event.x) + ", " + (d.y = d3.event.y) + ")")
        })

    // Mulit-part plug
    const plug = gridSvg.append('g')
        .datum({
            x: startX,
            y: startY
        })
        .attr('id', 'plug2')
        .style('cursor', 'move')
        .attr('transform', 'translate(' + startX + ', ' + startY + ')')
        .call(drag)
        ;

    plug.append('rect')
        .attr('width', width)
        .attr('height', height)
        .style('fill', '#4D4D4D')
        ;

    plug.append('text')
        .attr('x', 5)
        .attr('y', height/2)
        .attr('fill', 'white')
        .style('font-size', 20)
        .text('Plug-In')
        ;

}
