import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';

import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './components/tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EasyTrack';
  users = DUMMY_USE
  RS;
  userId = 'u1';
  selectedUser = this.users.find((user) => user.id === this.userId)!;

  onReceiveUser(id: string) {
    console.log('selected id' + id);
    this.userId = id;
  }
}
