import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Todo from 'src/app/models/todo';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  taskTitle:String;
  @Output("onSubmit") submitEmitter= new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(){
    const newTodo:Todo = new Todo(this.taskTitle,false)
    this.submitEmitter.emit(newTodo)
    this.taskTitle=""
  }


}
