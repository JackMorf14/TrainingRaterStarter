import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession } from '../sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {
  sessions: ISession[] = [
  ];
  constructor(
    private sessionsService: SessionsService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.sessions = this.sessionsService.getSessions(); -- This line of code is being replaced by the folloing line
    this.sessionsService.getSessions()
      .subscribe(
        (sessions) => {
          // sessions.forEach((session) => {
          //   const startTime = new Date(session.startTime);
          //   startTime.setHours(startTime.getHours() - (startTime.getTimezoneOffset() / 60))
          //   session.startTime = startTime.toISOString();
          // });
          this.sessions = sessions;
        });
  }

  goToAdd(): void {
    this.router.navigate(['sessions/add']);
  }
  goToEdit(id: number): void {
    this.router.navigate([`sessions/${id}`]);
  }

}
