import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from '../../entity/service-entity';

@Injectable()
export class ServiceService {

    constructor(
        @InjectRepository(ServiceEntity)
        private readonly serviceRP:Repository<ServiceEntity>){
    }
    
    async saveService( service:any ){
        await this.serviceRP.insert(service);
        return service;
    }

    async updateService( id:number, service:any ){
        await this.serviceRP.update(id,service);
    }

    async findAll(){
        return await this.serviceRP.find();
    }

    async findOneService( id:number ){
        return await this.serviceRP.findOne(id);
    }

    async findByAuthor( author:string ){
        return await this.serviceRP.createQueryBuilder()
        .where("create_by like '%:author%'", { author: author })
        .execute();
    }

    async deleteService( id:number ){
        return await this.serviceRP.delete(id);
    }

}
