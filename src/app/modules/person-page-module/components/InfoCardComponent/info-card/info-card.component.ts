import { Component, Input, OnInit } from '@angular/core';
import { ICard, IUserUI } from 'src/app/types/i-user';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() card: ICard | null = null;

  constructor() { }

  ngOnInit() {
    
  }

}
