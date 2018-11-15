import { Component, OnInit } from '@angular/core';
import {UsersService, IUsers} from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {
  users: IUsers[] = [

  ];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // this.users = this.usersService.getUsers();
    this.usersService.getUsers().subscribe( (users) => this.users = users);
  }

}
