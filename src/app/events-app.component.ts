import { Component, OnInit } from '@angular/core';
import { AuthService } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './events-app.component.html'
})
export class EventsAppComponent implements OnInit {

  constructor(private auth: AuthService) { }
  ngOnInit(): void {
    this.auth.checkAuthenticationStatus();
  }
}
