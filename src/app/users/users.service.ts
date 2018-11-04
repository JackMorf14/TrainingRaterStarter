import { Injectable } from '@angular/core';


@Injectable()
export class UsersService {
  usersSampleData = [{fName: 'Jack', lName: 'Morford', DOB: '12/24/1980'},
  {fName: 'Amanda', lName: 'Luker', DOB: '06/07/1983'},
  {fName: 'Jim', lName: 'Randolf', DOB: '03/14/1987'},
  ];

  constructor() { }
  getUsers(): {}[] {
    return this.usersSampleData;
  }
}
