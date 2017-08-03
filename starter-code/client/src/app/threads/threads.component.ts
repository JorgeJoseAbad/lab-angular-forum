import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { ThreadsService} from '../services/threads.service';


@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
  providers: [ThreadsService]
})
export class ThreadsComponent implements OnInit {

  threads:Observable<Array<Object>>;

  constructor(private ThreadsService: ThreadsService) { }

  ngOnInit() {

    this.threads = this.ThreadsService.getThreads();
    console.log(this.threads);
  }


}
