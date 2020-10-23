import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  employees = [{employee_name: 'test'}, {employee_name:'test2'}];


  constructor(private api:ApiService){
    this.getEmployees();
  }

  getEmployees = () => {
    this.api.getAllEmployees().subscribe(
      data => {
        this.employees = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
