import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title:string;
  content:string;
  todos=[];
  AddToList(title:string,content:string) {
    const list = {
      label:this.title,
      msg:this.content,
  };

    this.todos.push(list);

  }
  constructor() { }

  ngOnInit() {
  }

}
