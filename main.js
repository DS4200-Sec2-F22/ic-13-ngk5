// div size (frame)
const FRAME_HEIGHT = 400;
const FRAME_WIDTH = 750;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;


// left frame
const FRAME_LEFT = d3.select("#city-hall")
						.append("svg")
							.attr("height", FRAME_HEIGHT)
							.attr("width", FRAME_WIDTH)
							.attr("class", "frame");

// right frame
const FRAME_RIGHT= d3.select("#library")
						.append("svg")
							.attr("height", FRAME_HEIGHT)
							.attr("width", FRAME_WIDTH)
							.attr("class", "frame");

let city_hall;
let library;

// build left line chart
d3.csv("data/city-hall-short.csv", // short data includes 2019-01-01 00:00:00 until 2020-01-01 00:00:00
	// reformats data for time
	(d) => {return { date : d3.timeParse("%Y-%m-%d %H:%M:%S")(d.DateTime_Measured), value : d.Total_Demand_KW };}).then((data) => {
	
    // Add X axis --> it is a date format
    const x = d3.scaleTime()
			      .domain(d3.extent(data, (d) => { return d.date; }))
			      .range([ 0, VIS_WIDTH ]);

	FRAME_LEFT.append("g")
	      .attr("transform", "translate(0," + VIS_HEIGHT + ")")
	      .call(d3.axisBottom(x));

	    // Add Y axis
	const y = d3.scaleLinear()
	      .domain( [0, d3.max(data, (d) => {return parseInt(d.value);})])
	      .range([ VIS_HEIGHT, 0 ]);

	FRAME_LEFT.append("g")
	      .call(d3.axisLeft(y));

	// Add the line
	FRAME_LEFT.append("path")
	      .data(data)
	      .attr("fill", "none")
	      .attr("stroke", "#69b3a2")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x((d) => { return x(d.date) })
	        .y((d) => { return y(d.value) })
	        )

	// Add the points
	city_hall = FRAME_LEFT.append("g")
						      .selectAll("dot")
						      .data(data)
						      .enter()
						      .append("circle")
						        .attr("cx", (d) => { return x(d.date) } )
						        .attr("cy", (d) => { return y(d.value) } )
						        .attr("r", 1)
						        .attr("class", "point");

	// brushing and linking
	FRAME_LEFT.call(d3.brushX()
				.extent([[0,0], [(FRAME_WIDTH - MARGINS.left - MARGINS.right) ,(FRAME_HEIGHT - MARGINS.bottom - MARGINS.top)]])
				.on("brush end", highlight_charts));


	//function to highlight points in the library plot when brushed in the city hall plot
	function highlight_charts(event) {

		// coordinates of the selected region
		const selection = event.selection;

		// clears highlights when brush restarts
		if (selection === null) {
			library.classed('selected', false);
		} 
		// gives the border/opacity for all plots
		else {
			// highlights corresponding points in the library plot
			library.classed("selected", (d) => isBrushed(selection, x(d.date)));
		};
	}

	// returns if a point is in the brush selection
	function isBrushed(brush_coords, cx) {
		let x0 = brush_coords[0];
		let x1 = brush_coords[1];
		return x0 <= cx && cx <= x1;
	};
})



// build right line chart
d3.csv("data/library-short.csv", // short data includes 2019-01-01 00:00:00 until 2020-01-01 00:00:00
	// reformats data for time
	(d) => {return { date : d3.timeParse("%Y-%m-%d %H:%M:%S")(d.datetime_utc_measured), value : d.total_demand_kw};}).then((data) => {
	
    // Add X axis --> it is a date format
    const x2 = d3.scaleTime()
			      .domain(d3.extent(data, (d) => { return d.date; }))
			      .range([ 0, VIS_WIDTH ]);

	FRAME_RIGHT.append("g")
	      .attr("transform", "translate(0," + VIS_HEIGHT + ")")
	      .call(d3.axisBottom(x2));

	    // Add Y axis
	const y2 = d3.scaleLinear()
	      .domain( [0, d3.max(data, (d) => {return parseInt(d.value);})])
	      .range([ VIS_HEIGHT, 0 ]);

	FRAME_RIGHT.append("g")
	      .call(d3.axisLeft(y2));

	// Add the line
	FRAME_RIGHT.append("path")
	      .data(data)
	      .attr("fill", "none")
	      .attr("stroke", "#69b3a2")
	      .attr("stroke-width", 1.5)
	      .attr("d", d3.line()
	        .x((d) => { return x2(d.date) })
	        .y((d) => { return y2(d.value) }))

	// Add the points
	library = FRAME_RIGHT.append("g")
						      .selectAll("dot")
						      .data(data)
						      .enter()
						      .append("circle")
						        .attr("cx", (d) => { return x2(d.date) } )
						        .attr("cy", (d) => { return y2(d.value) } )
						        .attr("r", 1)
						        .attr("class", "point");

})