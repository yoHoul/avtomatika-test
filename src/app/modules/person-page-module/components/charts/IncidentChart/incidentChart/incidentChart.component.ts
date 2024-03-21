import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-incidentChart',
  templateUrl: './incidentChart.component.html',
  styleUrls: ['./incidentChart.component.scss'],
})
export class IncidentChartComponent implements OnInit {
  constructor(public usersService: UsersService) {}

  ngOnInit() {}

  chartOption: EChartsOption = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['80%', '100%'],
        label: {
          formatter: `Всего\n${this.usersService.userUI?.incidentChartData.reduce((acc,item) => {return acc += item.value}, 0)}`,
          position: 'center',
          fontSize: 28,
        },
        data: this.usersService.userUI?.incidentChartData,
      },
    ],
  };
}
