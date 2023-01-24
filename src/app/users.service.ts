import { Injectable } from '@angular/core';
import usersJson from '../assets/users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: string[] = usersJson;
  constructor() { 
    this.users = usersJson;
  }

  getUsers(): string[] {
    return this.users
  }

  addUser(user:string){
    this.users.push(user);
  }

  isUserExist(user:string): boolean {
    return this.users.find(exsitingUser => exsitingUser === user) !== undefined;
  }
}
