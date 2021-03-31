import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'


class BarChartsSupply extends Component{


    render() {
console.log(this.props.data[0].price + this.props.data[0]["1d"].price_change);
    return <div> 
        <Bar
        data={{
            labels : ['Max Supply', 'Actual Supply'],
            datasets: [
                {
                    label:'Supply History',
                    data: [this.props.data[0].max_supply,this.props.data[0].circulating_supply],
                    backgroundColor: [
                        '#92a8d1',
                        '#034f84'
                       
                    ],
                    borderColor: 'black',
                    borderWidth: 1,
                    hoverBorderColor: 'blue',
                    hoverBackgroundColor: 'blue',
                    hoverBorderWidth: 2,
                    hoverBackgroundColor:'blue',
                    hoverBorderWidth: 2,
                  
                },
                // {
                //     label:'Market Cap History',
                //     data: [this.props.data[0].market_cap - this.props.data[0]["365d"].market_cap_change,this.props.data[0].market_cap - this.props.data[0]["30d"].market_cap_change,
                //     this.props.data[0].market_cap - this.props.data[0]["7d"].market_cap_change,this.props.data[0].market_cap - this.props.data[0]["1d"].market_cap_change,
                //     this.props.data[0].market_cap - this.props.data[0]["1h"].market_cap_change,this.props.data[0].market_cap ],
                //     backgroundColor: [
                //         'rgba(255, 99, 132, 0.2)',
                //         'rgba(54, 162, 235, 0.2)',
                //         'rgba(255, 206, 86, 0.2)',
                //         'rgba(75, 192, 192, 0.2)',
                //         'rgba(153, 102, 255, 0.2)',
                //         'rgba(255, 159, 64, 0.2)'
                //     ],
                //     borderColor: 'green',
                // }

            ]
        }}
    height={400}
    width={600}
    options={{
        maintainAspectRatio: false,
    
        scales: {
            yAxes: [
                { display: false },
              
                {  gridLines: {
                    drawOnChartArea: false,
                    display: false,
                    drawBorder: true,
                  },
                    ticks: {
                        display: false ,
                    fontColor:'rgba(17, 51, 83, 0.3)',
                    beginAtZero: true,
                    fontSize: 12,
                    
                }}
            ],
            xAxes: [
                {  gridLines: {
                    drawOnChartArea: false,
                    display: false,
                    drawBorder: true,
                  },
                    ticks: {
                        fontColor:'rgba(17, 51, 83, 0.3)',
                        beginAtZero: true,
                        fontSize: 12,
                }}
            ]
        }
    }}
    /> </div>
}}

export default BarChartsSupply