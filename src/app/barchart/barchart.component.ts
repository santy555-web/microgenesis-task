import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {display:false,fontColor: 'white'},
    scales: {
      xAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: '' },
        barPercentage: 0.6
      }],
      yAxes: [{
        ticks: { fontColor: 'white',min: 0, max:60},
        gridLines: { color: '#757575' },
        barPercentage: 0.6
      }]
    }
    };
    public barChartOptionsSmall:any = {
      scaleShowVerticalLines: false,
      responsive: true,
      legend: {display:false,fontColor: 'white'},
      scales: {
        xAxes: [{
          ticks: { fontColor: 'white' },
          gridLines: { color: '' },
          barPercentage: 0.2
        }],
        yAxes: [{
          ticks: { fontColor: 'white' ,min: 40, max:100},
          gridLines: { color: '#757575' },
          barPercentage: 0.2
        }]
      }
      };
  public barChartLabels: Label[] = ['August', 'september', 'October'];
  public barChartLabelsSmall: Label[] = ['A', 'B', 'C'];
  public barChartType: ChartType = 'bar';

  public barChartData: ChartDataSets[] = [
    { data: [28, 50, 100], label: ' A' },
    { data: [40, 19, 90], label: ' B' },
    { data: [48, 86, 27], label: ' C' }
  ];
  public barChartDataSmall: ChartDataSets[] = [
    { data: [70,80,90], label: 'A'}
  ];
  public barChartColors: any[] = [
    { backgroundColor: 'yellow', },
    { backgroundColor: 'red' },
    { backgroundColor: 'pink' }
  ]
    public barChartLegend:boolean = true;
  constructor() { }

  ngOnInit() {}

}
