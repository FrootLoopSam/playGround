import { User } from '@lupe-time/api-interfaces';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    users: User[] = [];

    getUser(userId: number): User {
        const user = this.users.find((user) => user.id === userId);
        if (!user) {
            throw new NotFoundException('User does not exist.');
        }
        return { ...user };
    }

    getUsers(): User[] | [] {
        return [...this.users];
    }

    createUser(user: User): User {
        // TODO: update to real id when switching to db
        const id = Math.random();
        this.users.push({...user, id});
        return {...user, id};
    }
}
