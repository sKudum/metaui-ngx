import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SomeService} from '../services/some-service';

@Component({
  selector: 'app-abstracted-input-group',
  templateUrl: './abstracted-input-group.component.html'
})
export class AbstractedInputGroupComponent implements OnInit {

  @Input()
  name:string;

  @Input()
  placeholder:string;

  @Input()
  amount:string;

  @Input()
  value:string;

  constructor(private myService: SomeService, private http: HttpClient) {
  }

  ngOnInit(): void {

  }

}
