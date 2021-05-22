import { Component, OnInit } from '@angular/core';
import{Todo} from '../../Todo'
import{Records}from '../../Records'
import { ConfigService } from '../../config.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
 
 todos:Todo[]=[];
 records!: Records[];
 
  constructor(private configService: ConfigService) { 

    
    console.log("response from get");
    this.configService.getList().subscribe(response => {
      console.log(response);
      console.log("response as string");
      const data = JSON.stringify(response);
      console.log(data);
      var obj=JSON.parse(data);
      console.log(obj);
      for (let key in obj) {
        console.log("      key:", key, "value:", obj[key]);
        this.records = obj[key];
        console.log("0th");
        console.log(this.records[0]);
    }
    
    this.records.forEach( (value) => {
      console.log(value);
      var todo=new Todo(value.fields.title,value.fields.desc,value.fields.size);
      console.log("todo inserted is ");
      console.log(todo);                      
      console.log("desc");
      console.log(value.fields.desc);
      console.log("pushing")
      this.todos.push(todo);
      
});
console.log("todos arr is")
console.log(this.todos);
    });
  }

  ngOnInit(): void {}

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
