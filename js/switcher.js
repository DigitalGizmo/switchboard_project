// Switchboard js

function showPlugs () {

    let startX = 400, startY = 660, width = 85, height = 120;

    const plugs = [null, null];

    const gridSvg = d3.select('#switchboard-grid');

    // const drag = d3.drag()
    //     .on("drag", function(d) {
    //         d3.select('#plug2').attr("transform", "translate(" +
    //         (d.x = d3.event.x) + ", " + (d.y = d3.event.y) + ")")
    //     })

    // Mulit-part plug
    plugs[0] = gridSvg.append('g')
        .datum({
            x: startX,
            y: startY
        })
        .attr('id', 'plug2')
        .style('cursor', 'move')
        .attr('transform', 'translate(' + startX + ', ' + startY + ')')
        .call(d3.drag()
            .on("drag", function(d) {
            d3.select(this).attr("transform", "translate(" +
            (d.x = d3.event.x) + ", " + (d.y = d3.event.y) + ")")
            })
        )
        ;

    plugs[0].append('rect')
        .attr('width', width)
        .attr('height', height)
        .style('fill', '#4D4D4D')
        ;

    plugs[0].append('text')
        .attr('x', 5)
        .attr('y', height/2)
        .attr('fill', 'white')
        .style('font-size', 20)
        .text('Plug-In')
        ;

    plugs[0].append('line')
        .style('stroke', '#4D4D4D')
        .style('stroke-width', 14)
        .attr('x1', (width/2))
        .attr('y1', 0)
        .attr('x2', (width/2))
        .attr('y2', - 50)
        ;

    plugs[0].append('circle')
        .style('fill', '#4D4D4D')
        .attr('cx', width/2)
        .attr('cy', -50)
        .attr('r', 7)
        ;

    plugs[0].append('circle')
        .style('fill', '#4D4D4D')
        .attr('cx', width/2)
        .attr('cy', height)
        .attr('r', 7)
        ;

}
