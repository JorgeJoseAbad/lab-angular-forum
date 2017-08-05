import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThreadsComponent } from './threads/threads.component';
import { LoginComponent } from './login/login.component';

import { ThreadsService} from './services/threads.service';
import { SessionsService} from './services/sessions.service';
import { SignupComponent } from './signup/signup.component';
import { NewThreadComponent } from './new-thread/new-thread.component';
import { SingleThreadComponent } from './single-thread/single-thread.component'


export const routes: Routes = [
    { path: '', component: ThreadsComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'threads/new', component: NewThreadComponent},
    { path: 'threads/:id', component: SingleThreadComponent},
    { path: '**', redirectTo: '' }
  ]

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent,
    NewThreadComponent,
    SingleThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ThreadsService,SessionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
