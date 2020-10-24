import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  employees = [{ employee_name: 'test' }, { employee_name: 'test2' }];


  constructor(private api: ApiService) {

  }

  Employees: any = []



  ngOnInit(): void {
    this.refreshEmps()
  }

  refreshEmps() {
    this.api.getEmployeeList().subscribe(
      data => {
        this.Employees = data;
      },
      error => {
        console.log(error);
      }
    )
  }


  addEmployee(emp) { 
    var val = { employee_id: emp.emp_id, employee_name: emp.emp_name, dob: emp.dob, date_of_joining: emp.doj, mobile: emp.mobile, email_id: emp.email, department: emp.department, designation: emp.designation, location: emp.location };
    this.api.addEmployee(val).subscribe(
      res=>{
        alert("Succesfully Added");
        this.refreshEmps();
      },
      error=> {
        alert("Oops! Something went wrong! Tip: Check Employee id");
      }      
    );
  }

  updateEmployee(emp) {

  }


  deleteEmployee(emp) { 
    this.api.deleteEmployee(emp.employee_id).subscribe(
      res=>{
        alert("Succesfully Deleted");
        this.refreshEmps();
      }
    );
  }

        


  // working
  // constructor(private api: ApiService) {
  //   this.getEmployees();
  //   // newEmp = { emp_id: '', emp_name: '', dob: '', doj: '', mobile: '', email: '', department: '', designation: '', location: '' }
  // }

  // getEmployees = () => {
  //   this.api.getAllEmployees().subscribe(
  //     data => {
  //       this.employees.push(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }

  // // addEmployee = () => {
  // //   this.api.addNewEmployee(this.emp).subscribe(
  // //     data => {
  // //       this.employees.push(data);
  // //     },
  // //     error => {
  // //       console.log(error)
  // //         ;
  // //     }
  // //   )
  // // }

}
