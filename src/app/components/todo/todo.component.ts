import { TodoService } from './../../services/todo.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import  Todo  from 'src/app/models/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input("enterTodo") todo: Todo;
  @Output("onChange") changeEvent = new EventEmitter();
  @Output("onDelete") deleteEvent = new EventEmitter();
  
  constructor(private todoService: TodoService) { }

  handleChange(todo: Todo){
      this.changeEvent.emit(todo);
    
    
  }

  delete(todo: Todo){
      this.deleteEvent.emit(todo);
  }
}
