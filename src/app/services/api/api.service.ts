import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, find, map } from 'rxjs';
import { IUser, IUserUI } from 'src/app/types/i-user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getUsers(): Observable<IUser[]>{

    return this.http.get<IUser[]>("../../../assets/mocks/usersMock.json")
  }

  public getUsersUI(id: number): Observable<IUserUI | undefined>{

    return this.http.get<IUserUI[]>("../../../assets/mocks/usersUIMock.json").pipe(
      map(items => {
        return items.find(item => item.id === id);
      }))
      
  }

}
