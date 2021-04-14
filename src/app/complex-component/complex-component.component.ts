import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SomeService} from '../services/some-service';

@Component({
  selector: 'app-complex-component',
  templateUrl: './complex-component.component.html',
  styleUrls: ['./complex-component.component.css']
})
export class ComplexComponentComponent implements OnInit {
  data: any;

  constructor(private myService: SomeService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      this.data = data;
    });

  }

}
