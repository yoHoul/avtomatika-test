import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-kpiChart',
  templateUrl: './kpiChart.component.html',
  styleUrls: ['./kpiChart.component.scss']
})
export class KpiChartComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.usersService.userUI? this.usersService.userUI.KPIChartData.mounth : [],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: this.usersService.userUI? this.usersService.userUI.KPIChartData.value : [],
        type: 'line'
      }
    ]
  };

  ngOnInit() {
  }

}
