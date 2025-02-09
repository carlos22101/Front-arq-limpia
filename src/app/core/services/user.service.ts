import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8000/usuarios/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.apiUrl}${id}`);
  }

  createUser(user: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.apiUrl, user);
  }

  updateUser(id: number, user: Usuarios): Observable<Usuarios> {
    return this.http.put<Usuarios>(`${this.apiUrl}${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`);
  }
}
