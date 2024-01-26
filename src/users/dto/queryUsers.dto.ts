import {WriteUserDto} from "./writeUser.dto";
import {OmitType} from "@nestjs/mapped-types";

export class QueryUsersDto extends OmitType(WriteUserDto, ['password'] as const) {}