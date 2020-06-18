import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ServiceEntity } from '../offer/entity/service-entity';
import { OfferModule } from '../offer/offer.module';

@Module({
    imports: [        
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '',
            database: 'greenline',
            entities:[
                ServiceEntity
            ],
            synchronize: true,
        }),
        OfferModule
    ]
})
export class DatabaseModule {}
