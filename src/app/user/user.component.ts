import { Component, signal, computed, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // older way to do state management in Angular (using zone inbuild package)
  // selectedUser = DUMMY_USERS[0];
  // this is a getter works like a function but you can access it like a property
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  
  // @Input({ required: true}) id!: string;
  // @Input({ required: true}) avatar!: string;
  // @Input({ required: true}) name!: string;
  @Input({required: true}) user !: User;
  @Input({required: true}) selected !: boolean;
  @Output() select = new EventEmitter<string>();

  get ImagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // older way to do state management in Angular (using zone inbuild package)
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.select.emit(this.user.id);
  }
}
