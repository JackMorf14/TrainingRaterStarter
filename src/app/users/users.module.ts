import { NgModule } from '@angular/core';
import { UsersService } from './users.service';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';
import { UsersDetailComponent } from './user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersListComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: []
})
export class UsersModule { }
