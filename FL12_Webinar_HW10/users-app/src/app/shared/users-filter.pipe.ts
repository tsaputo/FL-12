import {Pipe, PipeTransform} from '@angular/core';
import { User } from '../constants';

@Pipe({
    name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {
    transform(users :User[], search :string = '') :User[] {
        if (!search.trim()) {
            return users;
        }

        return users.filter((user) => {
            return user.name.indexOf(search) !== -1
                || user.email.indexOf(search) !== -1
        });
    }

}