import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IUserUI } from 'src/app/types/i-user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, OnDestroy {

  private usersUISubscription: Subscription = new Subscription();

  public password: string = ""

  constructor(private apiService: ApiService, private usersService: UsersService) { }

  public handleClickOnLogin() {
    if(this.usersService.user && this.password === this.usersService.user.password) {
      this.usersUISubscription = this.apiService.getUsersUI(this.usersService.user.id).subscribe({
      next:(userUI?: IUserUI) => {this.usersService.userUI = userUI? userUI : null}, 
      error:(e: any) => {console.error(e)}});
    }
    
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.usersUISubscription.unsubscribe();
  }

}