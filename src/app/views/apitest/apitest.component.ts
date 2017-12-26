import {Component, OnInit} from '@angular/core';
import {ExampleService} from "../../services/Example.service";

@Component({
  selector: 'app-apitest',
  templateUrl: './apitest.component.html',
  styleUrls: ['./apitest.component.css']
})
export class ApitestComponent implements OnInit {

  apiReturnValue: String;

  constructor(private exampleService: ExampleService) {
  }

  ngOnInit() {
  }

  exampleApi() {
    this.apiReturnValue = null;
    this.exampleService.getAll().subscribe((value:any) => {
      value.date = new Date(value.date); // Convert to Date
      this.apiReturnValue = value;
    }, (error) => {
    });
  }
}
