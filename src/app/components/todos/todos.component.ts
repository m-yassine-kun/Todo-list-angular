import  Todo  from 'src/app/models/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  constructor(private todoService: TodoService) { }
  todos:Todo[]=[]
  ngOnInit(): void {
    this.todoService.getTodos(6).subscribe(todos=>{
      this.todos=todos

    })
  }

 
  changeTodo(todo){
    
    todo.completed = !todo.completed
    this.todoService.update(todo).subscribe(() => {
      this.todos = this.todos.map(item => {
      if(todo.id === item.id){
        return todo; 
        }
        return item;
      });
    });
   
  } 

  deleteTodo(todo){
     this.todoService.delete(todo.id).subscribe(() => {
      this.todos = this.todos.filter(item => {
        return item !== todo;
      });
    });
  }
  addTodo(todo){
    console.log(todo);
    
    this.todos.push(todo)
  }
}
