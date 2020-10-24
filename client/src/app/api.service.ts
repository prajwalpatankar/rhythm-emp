import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseurl + '/employees/',
      {headers: this.httpHeaders});
  }

  addNewEmployee(em): Observable<any> {
    const body = {employee_id: em.employee_id , employee_name: em.employee_name , dob: em.dob , date_of_joining: em.date_of_joining , mobile: em.mobile , email_id: em.email_id , department: em.department, designation: em.designation , location: em.location }
    return this.http.post(this.baseurl + '/employees/', body,
      {headers: this.httpHeaders});
  }

  getEmployeeList():Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + '/employees/');
  }

  addEmployee(val:any) {
    return this.http.post(this.baseurl + '/employees/',val, 
    {headers: this.httpHeaders});
  }

  updateEmployee(val:any) {
    return this.http.put(this.baseurl + '/employees/',val);
  }

  deleteEmployee(val:any) {
    return this.http.delete(this.baseurl + '/employees/' + val);
  }


}
