import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  activeRoute = inject(ActivatedRoute);
  serviceUser = inject(UserService);
  router = inject(Router);
  singleUser!: User;

  ngOnInit() {
    this.activeRoute.params.subscribe(async (params) => {
      let id = params['id'];
      this.singleUser = await this.serviceUser.getById(id);
    });
  }

  onDelete(id: string) {
    this.serviceUser.delete(id).then((resp) => {
      if (resp) {
        console.log('Datos del usuario eliminado -> ', resp);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Usuario ${this.singleUser.id} eliminado`,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        this.router.navigate(['user-list']);
      }
    });
  }

  onEdit() {
    this.router.navigate(['/edit-user/', this.singleUser._id]);
  }
}
