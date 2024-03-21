import { Injectable } from '@angular/core';
import { IUser, IUserUI } from 'src/app/types/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users: IUser[] = [];
  
  public userUI: IUserUI | null = null;

  public user: IUser | null = null;

  constructor() { }

  public getInitials(name: string): string {
    const initials = name.split(' ')
    return `${initials[2][0]}${initials[0][0]}`
  }
}
