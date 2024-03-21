import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IUser } from 'src/app/types/i-user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private usersSubscription: Subscription = new Subscription();

  constructor(private apiService: ApiService, public usersService: UsersService) {}

  ngOnInit(): void {
    this.usersSubscription = this.apiService.getUsers().subscribe({
      next:(users: IUser[]) => {this.usersService.users = users}, 
      error:(e: any) => {console.error(e)}});
  }

  

  public handleClickOnPerson(user: IUser) {
    this.usersService.users.forEach(element => {
      element.isActive = false
    });
    user.isActive = true
    this.usersService.user = user;
  }

  public trackUser(_: number, user: IUser): number {
    return user.id
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  
}
