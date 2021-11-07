import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-manage',
  templateUrl: './todos-manage.component.html',
  styleUrls: ['./todos-manage.component.css']
})
export class TodosManageComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo)
  {
    console.log("Delete is Tiggered");
    this.todoDelete.emit(todo);
  }

  onCheckBoxClick(todo:Todo)
  {
    this.todoCheckbox.emit(todo);
  }

}
