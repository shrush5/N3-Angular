import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title='daythree';
 
 employee:any[]=[{"ID":101,"Name":"Hetavi","Salaray":23000.50},
 {"ID":102,"Name":"Damini","Salaray":25000.50},
 {"ID":103,"Name":"Shrushti","Salaray":26000.50}
];
constructor(){}

ngOnInit(): void {
  
}

}
