import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { UserDetailsComponent } from '../../components/user-single/user-single.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserDetailsComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  userService = inject(UserService);
  arrayUsers!: User[];

  async ngOnInit() {
    try {
      const response = await this.userService.getAll();
      this.arrayUsers = response.results;
    } catch (error) {
      console.log(error);
    }
  }
}
