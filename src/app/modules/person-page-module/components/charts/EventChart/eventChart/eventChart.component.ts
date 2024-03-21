import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-eventChart',
  templateUrl: './eventChart.component.html',
  styleUrls: ['./eventChart.component.scss']
})
export class EventChartComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

}
