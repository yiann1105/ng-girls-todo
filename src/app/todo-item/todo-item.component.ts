import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div>
  <input type="checkbox"
          class="todo-checkbox"
         (click)="completeItem()"/>
        <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
         {{ item.title }}
       </span>
  </div>
  <button class="btn btn-red" (click)="removeItem()">
      remove
  </button>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // put this method below ngOnInit
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem() {
    this.remove.emit(this.item);
  }


}
