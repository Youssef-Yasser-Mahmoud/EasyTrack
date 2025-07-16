import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select = new EventEmitter<string>();

  // id = input.required<string>();
  // name = input.required<string>();
  // avatar = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectedUser() {
    this.select.emit(this.id);
  }
}
