import {useEffect, useState} from 'react';
import * as d3 from 'd3';
import '../style/timeSeriesChart.css'
import moment from 'moment';
import axios from "axios";

export default function TimeSeriesChart( props) {
    const {width, height } = props;

	const [data, setData] = useState([]);


  //fetching date 
  async function getYoungPeopleData() {
    await axios
      .get("https://graphsd33.herokuapp.com/youngPeople")
      .then((res) => {
        const tempData = [];
        res.data.forEach( d => {
            tempData.push({date: d3.timeParse("%Y-%m-%d")(d.date), value: parseFloat(d.logits)})
        });
       
        setData(tempData)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //draw the cvg chart
  const drawChart = () => {

    // establish margins
    const margin = { top: 10, right: 50, bottom: 50, left: 50 };
  
    // create the chart area
    const svg = d3
        .select('#time_series')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
  
  // Add X axis --> it is a date format
      var x = d3.scaleTime()
        .domain(d3.extent(data, function(d) { return  d.date; }))
        .range([ 0, width ]);
        
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
  
  
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([d3.min(data, function(d) { return +d.value }) , d3.max(data, function(d) { return +d.value; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));
  
      // set line coordinates
      const line = d3.line()
        .x(function(d) { return x(d.date) })
        .y(function(d) { return y(d.value) })
  
      // Add the line
      svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "darkblue")
        .attr("stroke-width", 1.5)
        .on("mouseover", onMouseOver)
        .on("mouseout", onMouseOut)
        .attr("d", line)
  
  
  
      // Mouseover event handler
    function onMouseOver(event , data) {
  
          //get the coordinate of the x and the y axis of the mouse
          const [xA ,yA] = d3.pointer(event);
  
          //extract the right data of each coordinate
          var x0 = x.invert(xA); // date
          var y0 = y.invert(yA); // logit
  
      // Update Tooltip's position and value
      d3.select('#tooltip').text(`${y0}  ${ moment(x0).format('MMMM Do YYYY')}`);	
      d3.select('#tooltip').classed('hidden', false);
  
    }
  
    // Mouseout event handler
    function onMouseOut(d, i){
      d3.select('#tooltip').classed('hidden', true);
    }
   }


  useEffect(()=>{
    if (data.length > 0) {
      drawChart();
    } else {
      getYoungPeopleData()
    }
    
  },[data]);


  return (
    <>
      <div className="container">
        <h4> Time Series chart  </h4>
          <div id="tooltip" className="hidden">
              <strong>Logits movement</strong>
              <p><span id="value"></span></p>
          </div>
        <div id='time_series'/>
        <hr/>
      </div>
      
    </>
  );
}
