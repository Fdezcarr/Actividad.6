import { inject, Injectable } from '@angular/core';
import { User, UsersResponse } from '../interfaces/user';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = 'https://peticiones.online/api/users';
  private http = inject(HttpClient);

  getAll(page: number = 1): Promise<UsersResponse> {
    return firstValueFrom(
      this.http.get<UsersResponse>(`${this.url}?page=${page}`)
    );
  }

  getById(id: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(`${this.url}/${id}`));
  }

  delete(id: string): Promise<User> {
    return firstValueFrom(this.http.delete<User>(`${this.url}/${id}`));
  }

  insert(user: User): Promise<User> {
    return firstValueFrom(this.http.post<User>(`${this.url}`, user));
  }

  update(user: User): Promise<User> {
    return firstValueFrom(this.http.put<User>(`${this.url}/${user._id}`, user));
  }
}
