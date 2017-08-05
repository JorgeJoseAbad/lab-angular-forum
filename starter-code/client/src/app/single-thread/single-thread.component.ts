import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { ThreadsService} from '../services/threads.service';
import { SessionsService} from '../services/sessions.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.css']
})

export class SingleThreadComponent implements OnInit {
  thread: Object;
  t: Object;
  error: string;
  content: string;
  threadId: string;

  constructor(private threadservice: ThreadsService,
              private route: ActivatedRoute,
              private Session: SessionsService) {

    route.params
      .mergeMap( t => threadservice.getSingleThread(t))
      .subscribe( thread => {
        console.log(thread);
        this.thread = thread;
      });
}

  ngOnInit() {
    this.route.params.subscribe((params) => {
       //this.thread.id = params['threadId'];
       });
  }

}
