import React, {useEffect, useRef} from "react";
import * as d3 from "d3";
import "./Chart.css";
import User from "./User";
import Company from "./Company";
import Interview from "./Interview";
import Accept from "./Accept";
import Reject from "./Reject";
import Call from "./Call";

const Chart = ({seIsWantToRegestert, isWantToRegester}) => {
  const chartRef = useRef(null);

  const person = ['mustapha']

  useEffect(() => {
    seIsWantToRegestert(false)
  }, [])


  useEffect(() => {
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", 500)

    const rect = svg
      .append("rect")
      .style('background', 'blue')
      .style('stroke', 'black')
      .style('stroke-width', '2')
      .style('stroke-linecap', 'round')
      .attr('height', 50)
      .attr('width', 150)
      .attr('fill', 'none')
      .attr('y', 50)
      .attr('x', 20)
      .append('text')
      .text(person, (p) => p)
      

    return () => {
      svg.remove();
    };
  }, []);

  return <div ref={chartRef}></div>;
};

export default Chart;
