// 'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


//import '../Style/ChartCard.css'

const ChartComponent = () => {
    const chartOptions = {
        chart: {
            id: 'area-spline-chart',
            type: 'area',
            stacked: true, // Set to true if you want to stack multiple series
        },
        xaxis:{
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                //   title: {
                //     text: 'Sales',
                //   },
                lines: {
                    show: true
                },
            }
        },
        yaxis: {
            tickAmount: 10,

            labels:{
                maxHeight:100,
                // formatter: function(value, timestamp, opts) {
                //     return opts.dateFormatter(new Date(timestamp)).format("dd MMM")
                // }
            },
            min:0,
            max:100
        },
        theme:{
            mode: 'dark'
        },
        dataLabels: {
            enabled: false, // Set to true if you want to show data labels on the chart
        },
        stroke: {
            curve: 'smooth', // Use 'smooth' for spline effect
        },
        fill: {
            gradient: {
              enabled: true,
              opacityFrom: 1,
              opacityTo: 0.5
            }
          },
          colors:['#D100BC', '#08A0D8'],
        series: [
            {
                name: 'Sales',
                data: [30, 40, 45, 50, 49, 60, 70, 1, 1, 1, 1, 1],
            },
            {
                name: '5655',
                data: [1, 2, 0, 3, -10, 1, 1, 20, 30, 20, 10, 5],
            },
        ],
    };

    return (
        <>
            <ApexChart options={chartOptions} series={chartOptions.series} type="area" height="220" />
        </>
    );
};

export default ChartComponent;