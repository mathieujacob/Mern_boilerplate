import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'


class BarChartsHome extends Component{


    render() {
console.log(this.props.data[0].price + this.props.data[0]["1d"].price_change);
    return <div> 
        <Pie
        data={{
            labels : ['BTC', 'ETH', 'XPR', 'LTC', 'CRO'],
            datasets: [
                {
                    label:'Price Comparison',
                    data: [this.props.data[0].price, this.props.data[1].price, this.props.data[2].price,this.props.data[3].price, this.props.data[4].price],
                    backgroundColor: [
                        '#ff7b25',
                        '#3b3a30',
                        '#b2c2bf',
                        '#f0f0f0',
                        '#4040a1'
                       
                    ],
                    borderColor: 'black',
                    hoverBackgroundColor: 'red',
                    borderWidth: 1,
                    hoverBorderWidth: 3,
                  
                },
              

            ]
        }}
    height={400}
    width={600}
    options={
 
        {
        maintainAspectRatio: false,
        scales: {
            yAxes: [
               
            ]
        }
        
    }}
    /> </div>
}}

export default BarChartsHome 