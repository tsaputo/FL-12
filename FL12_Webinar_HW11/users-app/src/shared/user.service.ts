import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface User {
    id: number,
    name: string,
    email: string,
    phone: string
}

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    getUsers(): Observable <User> {
        return this.http.get<User>('http://localhost:3000/users')
    }

    getUser (id :string): Observable <User> {
        return this.http.get<User>(`http://localhost:3000/users/${id}`)
    }
    
    saveUser(user) {
        if (user.id === 'new') {
            user.id =  Math.floor(Math.random()*1000);
            return this.http.post(`http://localhost:3000/users`, user)
        } else {
            return this.http.put(`http://localhost:3000/users/${user.id}`, user)
        }

    }

    deleteUser(id) {
        return this.http.delete(`http://localhost:3000/users/${id}`)
    }
}