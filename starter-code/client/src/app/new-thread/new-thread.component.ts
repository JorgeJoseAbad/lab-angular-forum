import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThreadsService} from '../services/threads.service';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.css']
})
export class NewThreadComponent implements OnInit {
error: string;
form: Object;
  constructor(private threadservice: ThreadsService, private router:Router) { }

  ngOnInit() {
  }

  newThread(form){
    this.threadservice.addNew(form.value)
      .subscribe(
      (thread) => {
        console.log(thread);
        console.log(thread._id);
        this.router.navigate([''])
      },
      (err) => this.error = err
    );
  }

}
