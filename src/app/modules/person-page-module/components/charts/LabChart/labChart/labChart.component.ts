import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-labChart',
  templateUrl: './labChart.component.html',
  styleUrls: ['./labChart.component.scss']
})
export class LabChartComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.usersService.userUI? this.usersService.userUI.LabChartData.mounth : [],
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: this.usersService.userUI? this.usersService.userUI.LabChartData.value : [],
        type: 'bar'
      }
    ]
  };

  ngOnInit() {
  }

}
