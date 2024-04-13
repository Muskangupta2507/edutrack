import React,{useRef , useEffect, useState} from 'react';
import "./pichart.css";
// import piedta from "D:\Me\MyProjects\Studentsdetail.csv"
import * as d3 from "d3";

function Piechart() {
    const myElementRef=useRef(null);
    const radius=150;
    const totalWidth=radius*2;
    
    const[pieData,setPieData]=useState([
        {name:"Asia",value: 0},
        {name:"Africa",value: 10},
        {name:"Antarctica",value: 20},
        {name:"North America",value: 20},
        {name:"South America",value: 20},
        {name:"Europe",value: 20},
        {name:"Australia",value: 20},
    ]);
    useEffect(()=>{
        const svg=d3.select(myElementRef.current);
        const color=['#1f77b4',"#ff7f00","#2ca02c","#d62728","#9467bd","#6bb994","#d38ce2"];
        const pie=d3.pie().value((d)=>d.value);
        const dataready=pie(pieData);
        const arcgnrtr=d3.arc().innerRadius(0).outerRadius(radius);
        svg
        .selectAll('.mySlices')
        .data(dataready)
        .enter()
        .append('path')
        .attr("d",arcgnrtr)
        .attr('fill',(d,i)=>color[i])
        .attr("stroke","white")
        .attr('stroke-width','2px')
        // .attr('opacity',0.5)
        .attr('transform',`translate(${radius},${radius})`)
        //drawing label
        svg
        .selectAll('.myslice')
        .data(dataready)
        .enter()
        .append('text')
        .text((d)=>d.data.name +":" + d.data.value)
        .attr("text-anchor","middle")
        .attr("font-size",9)
        .attr("transform",(d)=>`translate(${arcgnrtr.centroid(d)})translate(${radius},${radius})`)

    },[pieData]);
  return (
    <div>
      <svg ref={myElementRef}
      width={totalWidth}
      height={totalWidth}
      ></svg>
    </div>
  )
}

export default Piechart;
