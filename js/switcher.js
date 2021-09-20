// Switchboard js

function showPlugs () {

    let startX = 10, startY = 660, width = 84, height = 120;

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

    plugs[0].append('line')
        .attr('class', 'line')
        .attr('x1', (width/2))
        .attr('y1', -50)
        .attr('x2', (width/2))
        .attr('y2', height + 7)
        ;


    plugs[0].append('text')
        .attr('class', 'label')
        .attr('x', width/2)
        .attr('y', height/2)
        .attr('text-anchor', 'middle')
        .text('PLUG-IN')
        ;

}
