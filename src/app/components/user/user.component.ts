import { Component, computed, Input, input } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;

  id = input.required<string>();
  name = input.required<string>();
  avatar = input.required<string>();

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectedUser() {
    // this.id.set() // Error because signals inputs are read-only
  }
}
