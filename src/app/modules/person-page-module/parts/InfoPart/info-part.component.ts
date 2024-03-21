import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-info-part',
  templateUrl: './info-part.component.html',
  styleUrls: ['./info-part.component.scss'],
})
export class InfoPartComponent {

  constructor(public usersService: UsersService) {}
  
}
