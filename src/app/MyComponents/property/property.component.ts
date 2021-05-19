import { Component, OnInit } from '@angular/core';
import{Todo} from '../../Todo'


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
 
 todos:Todo[];

  constructor() { 
    this.todos=[
    {
      title: "Almeria",
      desc: "This is amazing place",
      size: "1000 sqft",
      active:true
    },
    {
      title: "GurgaonOne",
      desc: "This is amazing place",
      size: "2000 sqft",
      active:true
    },
    {
      title: "Hyatt",
      desc: "This is amazing place",
      size: "3000 sqft",
      active:false
    }
    ]
   }

  ngOnInit(): void {
    
  }

deleteTodo(todo: Todo){
  console.log("inside delete property");
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1)
  
}
addTodo(todo: Todo){
 
  console.log(todo);
  this.todos.push(todo);
  
}

}
