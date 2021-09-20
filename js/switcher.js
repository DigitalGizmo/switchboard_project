// Switchboard js

function showPlugs () {

    let startY = 660, width = 84, height = 120; // startX = 10, 

    const plugs = [null, null];
    const phoneLines = [null, null];

    const gridSvg = d3.select('#switchboard-grid');

    // const drag = d3.drag()
    //     .on("drag", function(d) {
    //         d3.select('#plug2').attr("transform", "translate(" +
    //         (d.x = d3.event.x) + ", " + (d.y = d3.event.y) + ")")
    //     })


    function createPlug(index, startX) {
        // Mulit-part plug
        plugs[index] = gridSvg.append('g')
            .datum({
                x: startX, y: startY
            })
            .attr('id', 'plug2')
            .style('cursor', 'move')
            .attr('transform', 'translate(' + startX + ', ' + startY + ')')
            .call(d3.drag()
                .on("drag", function(d) {
                    // plug
                    d3.select(this).attr("transform", "translate(" +
                    (d.x = d3.event.x) + ", " + (d.y = d3.event.y) + ")")
                    // line
                    d3.select(phoneLines[0].attr('x1', d3.event.x + width/2))
                    d3.select(phoneLines[0].attr('y1', d3.event.y + height))
                })
            );

        plugs[index].append('rect')
            .attr('width', width)
            .attr('height', height)
            .style('fill', '#4D4D4D')
            ;
        plugs[index].append('line')
            .attr('class', 'jack')
            .attr('x1', (width/2))
            .attr('y1', -50)
            .attr('x2', (width/2))
            .attr('y2', height + 7)
            ;
        plugs[index].append('text')
            .attr('class', 'label')
            .attr('x', width/2)
            .attr('y', height/2)
            .attr('text-anchor', 'middle')
            .text('PLUG-IN')
            ;

    }

    function lineBetween(lineIndex, plug1index, plug2index) {
        console.log('plug1 index: ' + plugs[0].datum().x);
        // console.log('plug1 index: ' + d3.select('#plug2').attr("transform"));
        // console.log('plug1 index: ' + d3.select('#plug2').text( function (d) { return d; } ));
        // console.log('plug1 index: ' + d3.select('#plug2').data(data, function(d) { return d.x; }));
        // console.log('plug1 index: ' + plugs[0].data(data, function(d) { return d.x; }));
        // console.log('plug1 index: ' + plugs[0].data());
        phoneLines[lineIndex] = gridSvg.append('line')
            .datum({
                x1: plugs[plug1index].datum().x + width/2,
                y1: plugs[plug1index].datum().y + height
            })
            .attr('class', 'line')
            .attr('x1', plugs[plug1index].datum().x + width/2)
            .attr('y1', plugs[plug1index].datum().y + height)
            .attr('x2', plugs[plug2index].datum().x + width/2)
            .attr('y2', plugs[plug2index].datum().y + height)
            ;

    }

    createPlug(0, 10);
    createPlug(1, 140);

    lineBetween(0, 0, 1);

}
