import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionsService } from './services/sessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor (private session: SessionsService, private router: Router){}

  logout(){
    this.session.logout().subscribe();
    this.router.navigate(['/'])
  }
}
