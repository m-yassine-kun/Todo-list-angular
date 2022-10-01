import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-todo',
  templateUrl: './search-todo.component.html',
  styleUrls: ['./search-todo.component.css']
})
export class SearchTodoComponent implements OnInit {

  searchText:String;
  @Output("onSearch") submitEmitter=new EventEmitter();
  constructor() { }


  ngOnInit(): void {
  }

  handleSubmit(){
    this.submitEmitter.emit(this.searchText)
  }

}
