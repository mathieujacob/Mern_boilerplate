import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'


class BarChart extends Component{


    render() {
console.log(this.props.data[0].price + this.props.data[0]["1d"].price_change);
    return <div> 
        <Line
        data={{
            labels : ['365d', '30d', '7d', '1d', '1h', 'Actual'],
            datasets: [
                {
                    label:'Price History',
                    data: [this.props.data[0].price - this.props.data[0]["365d"].price_change,this.props.data[0].price - this.props.data[0]["30d"].price_change,
                    this.props.data[0].price - this.props.data[0]["7d"].price_change,this.props.data[0].price - this.props.data[0]["1d"].price_change,
                    this.props.data[0].price - this.props.data[0]["1h"].price_change,this.props.data[0].price ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: 'black',
                    borderWidth: 1,
                  
                },
                {
                    label:'Market Cap History',
                    data: [this.props.data[0].market_cap - this.props.data[0]["365d"].market_cap_change,this.props.data[0].market_cap - this.props.data[0]["30d"].market_cap_change,
                    this.props.data[0].market_cap - this.props.data[0]["7d"].market_cap_change,this.props.data[0].market_cap - this.props.data[0]["1d"].market_cap_change,
                    this.props.data[0].market_cap - this.props.data[0]["1h"].market_cap_change,this.props.data[0].market_cap ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: 'green',
                }

            ]
        }}
    height={400}
    width={600}
    options={{
        maintainAspectRatio: false,
    
        scales: {
            yAxes: [
                
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

export default BarChart