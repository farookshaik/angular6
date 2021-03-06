import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'cdk-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createBarGraph();
    }, 500);
  }

  createBarGraph() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('dash-bar-graph', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: '#7986CB',
            borderColor: '#B1A7FF',
            data: [63.7, 66.7, 65.4, 65.5, 66.8, 67.0, 65.4, 67.2, 65.5, 65.7, 66.7, 66.4],
            label: '2016',
            fill: 'false'
          },
          {
            backgroundColor: '#42A5F5',
            borderColor: '#A7C1FF',
            data: [66.8, 67.8, 66.2, 68.6, 68.4, 66.5, 68.4, 66.8, 66.7, 67.6, 66.9, 64.9],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: '#26A69A',
            borderColor: '#A7F0FF',
            data: [67.7, 69.3, 65.9, 69.7, 68.6, 68.1, 69.5, 68.7, 68.4, 67.8, 67.2, 67.0],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: '#26C6DA',
            borderColor: '#A7DEFF',
            data: [70.3, 67.8],
            label: '2019',
            fill: 'false'
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {

              fontStyle: "bold",
              beginAtZero: true,

            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: true,
              display: true
            }
          }]


        },
        legend: {
          display: true
        },
        elements: {
          line: {
            tension: 0.000001
          }
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: '% Current Support Paid By FFY'
        }
      }
    });
  }
}
