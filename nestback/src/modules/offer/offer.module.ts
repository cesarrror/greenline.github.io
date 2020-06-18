import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ServiceService } from "./services/service/service.service";
import { ServiceEntity } from "src/modules/offer/entity/service-entity";
import { ServiceController } from "./controllers/service/service.controller";

@Module({
    imports : [
        TypeOrmModule.forFeature([ServiceEntity])
    ],
    controllers : [
        ServiceController
    ],
    providers : [
        ServiceService
    ]
})
export class OfferModule{}