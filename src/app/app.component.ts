import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'ankit',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'UserDetails';
  
 
  employees: Employee[] = [];
  newEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(data => this.employees = data);
  }

  saveEmployee(){
    this.employeeService.saveEmployee(this.newEmployee)
      .subscribe(response => {
        console.log(response);
        this.getAllEmployees(); // Refresh the employee list after adding
      });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(response => {
        console.log(response);
        this.getAllEmployees(); // Refresh the employee list after deletion
      });
  }


}
