import { IsString, IsEmail, IsDate, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class WriteUserDto {
    @IsNotEmpty({ message: 'First name must not be empty' })
    @IsString({ message: 'First name must be a string' })
    @MinLength(2, { message: 'First name must be at least 2 characters long' })
    @MaxLength(50, { message: 'First name must not exceed 50 characters' })
    firstName: string;

    @IsNotEmpty({ message: 'Last name must not be empty' })
    @IsString({ message: 'Last name must be a string' })
    @MinLength(2, { message: 'Last name must be at least 2 characters long' })
    @MaxLength(50, { message: 'Last name must not exceed 50 characters' })
    lastName: string;

    @IsNotEmpty({ message: 'Birth date must not be empty' })
    @IsDate({ message: 'Invalid birth date' })
    birthDate: Date;

    @IsNotEmpty({ message: 'Email must not be empty' })
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty({ message: 'Password must not be empty' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(255, { message: 'Password must not exceed 255 characters' })
    password: string;
}
