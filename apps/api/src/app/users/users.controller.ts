import { User } from '@lupe-time/api-interfaces';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    users: User[];

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }

    @Get('user')
    getUser(@Body('id') id: number): User {
        return this.usersService.getUser(id);
    }

    @Post('user') 
    createUser(@Body() user: User) {
        return this.usersService.createUser(user);
    }
}
