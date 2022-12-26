import {Component, Input, ViewEncapsulation} from '@angular/core';
import {EChartsOption, format} from 'echarts';

@Component({
  selector: 'ui-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChartComponent {

  @Input()
  options!: EChartsOption;
  constructor() {
  }
}
