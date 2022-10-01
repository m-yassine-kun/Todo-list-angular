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
  resultTodos:Todo[]=[]
  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos=>{
      this.resultTodos=this.todos=todos

    })
  }
  

 
  changeTodo(todo:Todo){
    
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

  deleteTodo(todo:Todo){
     this.todoService.delete(todo.id).subscribe(() => {
      this.todos =this.resultTodos= this.todos.filter(item => {
        return item !== todo;
      });
    });
  }
  addTodo(todo:Todo){
    //  todo.id=Date.now();
    this.todoService.add(todo).subscribe((newTodo) => {
      console.log(newTodo);
      console.log(todo);
      


      this.todos.push(newTodo)
      // this.todos.push(todo)
    });
    
   
    
  }

  handleSearch(search:string){


    
      this.resultTodos=this.todos.filter((todo)=>todo.title.toLowerCase().includes(search.toLowerCase()) )
      console.log(this.resultTodos);
      console.log(this.todos);
    }
    
    
}
