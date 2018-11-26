import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  // Colon indicates that this route is more of a varriable (anyhitng can go in that sot and should be put into that variable name)
  { path: 'sessions/:sessionId', component: SessionsDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UsersDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
