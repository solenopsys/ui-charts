import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import {NgxEchartsModule} from "ngx-echarts";
import {DeclaredService} from "@solenopsys/uimatrix-utils";

const components = [
  ChartComponent
];

@NgModule({
  imports: [CommonModule, NgxEchartsModule],
  declarations: components,
})
export class UIChartsModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-charts", components)
  }
}
