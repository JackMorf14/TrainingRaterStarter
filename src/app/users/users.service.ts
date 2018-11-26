import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Observable';



export interface IUsers {
  id: number;
  fName: string;
  lName: string;
  DOB: string;
  createdAt: string;
  updatedAt: string;
}


@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
  ) { }


  getUsers(): Observable<IUsers[]> {
    return this.http.get<[IUsers]>('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<IUsers> {
    return this.http.get<IUsers>(`http://localhost:3000/users/${id}`);
  }

  save(users: IUsers): Observable<IUsers | number[]> {
    if (users.id) {
      return this.http.put<number[]>(`http://localhost:3000/users`, users);
    } else {
      return this.http.post<IUsers>(`http://localhost:3000/users`, users);
    }
  }
}
