import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  activeRoute = inject(ActivatedRoute);
  userService = inject(UserService);
  router = inject(Router);

  userId!: string;
  userDataObj!: User;

  ngOnInit() {
    this.activeRoute.params.subscribe(async (params) => {
      this.userId = params['id'];
    });
    this.userService.getById(this.userId).then((response) => {
      this.userDataObj = response;
    });
  }

  onSave() {
    this.userService.update(this.userDataObj).then((response) => {
      if (response) {
        console.log('Datos del usuario modificados -> ', this.userDataObj);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Usuario ${this.userDataObj.id} modificado`,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        this.router.navigate(['user-list']);
      }
    });
  }
}
