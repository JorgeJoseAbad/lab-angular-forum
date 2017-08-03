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
import { SignupComponent } from './signup/signup.component'


export const routes: Routes = [
    { path: '', component: ThreadsComponent },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent
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
