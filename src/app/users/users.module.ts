import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [UsersService],
  bootstrap: []
})
export class UsersModule { }
