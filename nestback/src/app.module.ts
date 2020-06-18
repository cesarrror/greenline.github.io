import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
// import { ServiceService } from './modules/offer/services/service/service.service';
// import { ServiceController } from './modules/offer/controllers/service/service.controller';

@Module({
  imports: [
    DatabaseModule,
  ],
  // controllers: [AppController, ServiceController],
  controllers: [AppController],
  // providers: [AppService, ServiceService],
  providers: [AppService],
})
export class AppModule {}
