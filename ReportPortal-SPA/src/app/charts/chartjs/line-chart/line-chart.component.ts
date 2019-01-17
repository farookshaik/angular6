import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare const Chart;
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.createChart();
    }, 400);
  }
  createChart() {
    // tslint:disable-next-line:no-unused-expression
    new Chart('chart-2', {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            backgroundColor: '#7E57C2',
            borderColor: '#7E57C2',
            data: [4282360, 4285052, 4546579, 4101487, 4474531, 4885548, 4429840, 4611256, 4467394, 4175881, 4736769, 4335721],
            label: '2016',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            data: [4223171, 4374696, 4292934, 4323582, 3960648, 5156190, 4204981, 4913913, 4357242, 4278333, 4352640, 4058404],
            label: '2017',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(66, 165, 245,.7)',
            borderColor: 'rgba(66, 165, 245,.7)',
            data: [4246588, 4051318, 4078958, 4349486, 3963736, 4675520, 4577583, 4646932, 4141479, 4315150, 4487952, 3822682],
            label: '2018',
            fill: 'false'
          },
          {
            backgroundColor: 'rgba(38, 166, 154,.7)',
            borderColor: 'rgba(38, 166, 154,.7)',
            data: [4547230, 4182294],
            label: '2019',
            fill: 'false'
          },
        ]
      },
      options: {
        legend: {
          display: false
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
          text: 'TOTAL COLLECTIONS'
        }
      }
    });
  }

}