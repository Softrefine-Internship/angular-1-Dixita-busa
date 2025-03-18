import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  name: string;
  email: string;
  age: string;
  phoneno: string;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() data!: User;
  @Output() op = new EventEmitter<User>();

  editUser() {
    this.op.emit(this.data);
  }
}