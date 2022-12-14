import Todo  from 'src/app/models/todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseURL="http://localhost:5000/todos"
  constructor(private http:HttpClient) { 
  }

  getTodos(): Observable<Todo[]>{
    
    return this.http.get<Todo[]>(this.baseURL)
  }

  delete(id:number){
    
    return this.http.delete<Todo[]>(this.baseURL+"/"+id)
  }
  update(todo:Todo){
    
    return this.http.put(this.baseURL+"/"+todo.id,todo)
  }
  add(todo:Todo):Observable<Todo>{
    
    return this.http.post<Todo>(this.baseURL,todo)
  }
}
