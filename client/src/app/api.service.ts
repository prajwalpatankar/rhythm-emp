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

  getEmployeeList():Observable<any[]> {
    return this.http.get<any[]>(this.baseurl + '/employees/');
  }

  addEmployee(val:any) {
    return this.http.post(this.baseurl + '/employees/',val, 
    {headers: this.httpHeaders});
  }

  // updateEmployee(val:any) {
  //   return this.http.put(this.baseurl + '/employees/',val,
  //   {headers: this.httpHeaders});
  // }

  deleteEmployee(val:any) {
    return this.http.delete(this.baseurl + '/employees/' + val);
  }


}
