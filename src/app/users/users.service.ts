import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  usersSampleData = [{fName: 'Jack', lName: 'Morford', DOB: '12/24/1980'},
  {fName: 'Amanda', lName: 'Luker', DOB: '06/07/1983'},
  {fName: 'Jim', lName: 'Randolf', DOB: '03/14/1987'},
  ];

  constructor(
    private http: HttpClient, ) { }

  getUsers(): Observable<IUsers[]> {
    return this.http.get<[IUsers]>('http://localhost:3000/users');
  }
}
