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
  }
 onClick(todo: Todo){
   this.todoDelete.emit(todo);

   console.log("onClick has been triggered")
 }
 onCheckboxClick(){
   
 }

 

}
