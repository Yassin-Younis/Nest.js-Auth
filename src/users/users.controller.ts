import {Body, Controller, Delete, Get, Patch, Post, Query, Headers, ValidationPipe, UsePipes} from '@nestjs/common';
import {QueryUsersDto} from "./dto/queryUsers.dto";
import {WriteUserDto} from "./dto/writeUser.dto";

@Controller("users")
@UsePipes(new ValidationPipe())
export class UsersController {
    @Post()
    createUser(@Body() body: WriteUserDto): string {
        return "Create a user";
    }

    @Get()
    readUser(@Headers('token') token: string, @Query() query: QueryUsersDto): string {
        return "All users";
    }

    @Patch()
    updateUser(@Headers('token') token: string, @Query() query: QueryUsersDto, @Body() body: WriteUserDto): string {
        return "Update a user";
    }

    @Delete()
    deleteUser(@Headers('token') token: string, @Query() QueryUsersDto: any): string {
        return "Delete a user";
    }
}
