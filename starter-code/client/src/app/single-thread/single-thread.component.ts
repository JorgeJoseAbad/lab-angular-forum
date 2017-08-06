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
  t: string;
  error: string;
  content: string;
  threadId: string;

  constructor(private threadservice: ThreadsService,
              private activatedroute: ActivatedRoute,
              private Session: SessionsService) {

    activatedroute.params
      .mergeMap( t => threadservice.getSingleThread(t))
      .subscribe( thread => {
        console.log(thread);
        console.log(thread._id);
        this.thread = thread;
        this.threadId=thread._id;
      });
}

  ngOnInit() {

       };


  addReply(){
    console.log(this.threadId);
    this.threadservice.addReply(this.threadId, this.content).subscribe();
  }

}
