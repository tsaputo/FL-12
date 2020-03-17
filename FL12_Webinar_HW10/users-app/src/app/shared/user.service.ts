import { Injectable } from "@angular/core"
import { User, USERS } from 'src/app/constants';


@Injectable({
    providedIn: "root"
})
export class UserService {
    users: User[] = USERS;
    
    getUsers(): User[] {
        return this.users;
    }

    deleteUser(id: string) {
        let index :number = this.users.findIndex(element => element.id === id);  
        this.users.splice(index, 1);  
    }
    
    saveUser(user :User) {
        if (user.id) {
            let index :number = this.users.findIndex(element => element.id === user.id); 
            this.users[index] = user;
        } else {
            user.id = this.uuid();
            this.users.unshift(user);
        }
    }

    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    
}