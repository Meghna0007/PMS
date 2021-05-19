import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  desc!: string;
  size!: string;
  @Output() todoAdd: EventEmitter<Todo>=new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log("inside onSubmit" +this.title)
  const todo={
  title: this.title,
  desc:this.desc,
  size:this.size,
  active:true
  }
  this.todoAdd.emit(todo);
}
}
