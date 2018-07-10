import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput = "";
  todos = [];
  checkOffTodo(todo){
    todo.isChecked = !todo.isChecked;
  }

  createTodo() {
    // this.todos.push(this.todoInput);
    // console.log(this.todos);
    // this.todoInput= "";
    // }
    let trimmedInput = this.todoInput.trim();
   if(trimmedInput !=""){
     this.todos.push({
       isChecked: false,
       name:this.todoInput

     });}
     this.todoInput = "";
   }
  editTodo(todo) {
    let index = this.todos.indexOf(todo);

    let tempTodoDesc = this.todos[index].name;
    this.todos[index].name = prompt("please rename", this.todos[index].name);
    if (this.todos[index].name == null) {
      this.todos[index].name = tempTodoDesc;
    }
    }
  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    }
  deleteAll(){
      this.todos = [];
    }
}