import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/Emp';  // Update the URL with your Spring Boot application's URL

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/getAllEmp`);
  }

  saveEmployee(employee: Employee): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/save`, employee);
  }

  deleteEmployee(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/delete/${id}`);
  }
}
