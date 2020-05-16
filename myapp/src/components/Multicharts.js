import React,{Component} from 'react'

import Chart from 'react-apexcharts'

 
class Mutlicharts extends Component{
	    constructor(props) {
          super(props);

          this.state = {
          
            series: [
              {
                name: "FDM",
                data: [280, 299, -33, -36, 320, -132, 33,34,22,-212,34,22,-212,234,-543,-123,-214,312,-33,134,234,43,234]
              },
              {
                name: "CDM",
                data: [120, -111, 140, 108,34,22,-212, -217, 123, 113,-132, 33,34,22,-212,234,-543,-33, -36, 320, -132, 33,223]
              },
              {
                name: "PDM",
                data: [-217, 123, 113,-132, -33,324,120, -111, -140, 208,314,122,-212, -132, 233,123, 22,-212,234,-543,-33, -36, 320]
              }
            ],
            series1: [
              {
                name: "LDM",
                data: [180, 219, -133, -326, 120, -132, 323,134,122,-12,324,-22,-212,232,-143,-223,-114,112,-133,234,234,421,214]
              },
              {
                name: "RDM",
                data: [280, 119, -233, -126, 220, -232, 123,234,222,-112,224,-122,-12,32,-243,-123,-314,212,-233,134,134,121,114]
              },
            ],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: '.',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00','01:00','02:00','03:00','04:00',':05:00',],
              },
               legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
              }
            },
          
          
          };
        }



 componentDidMount(){

        	
fetch('http://localhost:5000/data')
.then(d=>d.json())
.then(da=>{
console.log(da.id)


if(da.id=='series')
{
  this.setState({
  	series1:[...this.state.series1,{name:da.name,data:da.data}]
  })
}
else{

	this.setState({
  	series:[...this.state.series,{name:da.name,data:da.data}]
  })

}

})
        	
        }

      

        render() {
          return (
      <div>      
<h1>Product Detail</h1>
      <div id="chart" >
  <Chart options={this.state.options} series={this.state.series} type="line" height={250}  />
  <Chart options={this.state.options} series={this.state.series1} type="line" height={250} />
</div>
    
    </div>

          );
        }
}

export default Mutlicharts;