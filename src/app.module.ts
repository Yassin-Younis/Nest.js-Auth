import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsersModule} from './users/users.module';
import {ThrottlerModule} from "@nestjs/throttler";
import {throttlerConfig} from "./security/throttler.config";

@Module({
    imports: [ThrottlerModule.forRoot(throttlerConfig), UsersModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {
}
