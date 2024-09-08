import { Component, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-single',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css',
})
export class UserDetailsComponent {
  @Input() user!: User;

  ngOnInit() {}
}
