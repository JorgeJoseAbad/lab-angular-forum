import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {environment} from '../../environments/environment';

@Injectable()
export class ThreadsService {
  //BASE_URL: string = 'http://localhost:3000';
  BASE_URL: String=environment.baseURL;
  options: Object = {withCredentials:true};

  constructor(private http: Http) {}

  getThreads() {
    console.log("en getlist service");
      return this.http.get(`${this.BASE_URL}/api/threads`)
        .map((res) => res.json());
    }

  addNew(thread) {
      console.log(thread)
      return this.http.post(`${this.BASE_URL}/api/threads`, thread, this.options)
        .map((res) => res.json());
    }

  getSingleThread(id){
    console.log(id);
    console.log(id.id);
    return this.http.get(`${this.BASE_URL}/api/threads/${id.id}`)
      .map((res)=>res.json());
  }


}
