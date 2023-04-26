import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class  AppComponent{
 title='daythree';
 displayCode=false;
 color='';
 public employee:any[]=[{"ID":101,"Name":"Hetavi","Salaray":23000.50},
 {"ID":102,"Name":"Damini","Salaray":25000.50},
 {"ID":103,"Name":"Shrushti","Salaray":26000.50}
];
constructor(){}

ngOnInit(): void {
  
}
}
