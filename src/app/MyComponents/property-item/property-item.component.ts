import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {

  @Input()
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter;
 
  constructor() { }

  ngOnInit(): void {
    console.log("Inside property item init");
    console.log(this.todo);
  }
 onClick(todo: Todo){
   this.todoDelete.emit(todo);

   console.log(Response);
 }
 onCheckboxClick(){
   
 }

 

}
