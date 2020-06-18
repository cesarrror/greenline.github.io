import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { ServiceModel } from 'src/models/service.interface';
import { ServiceService } from '../../services/service/service.service';

@Controller('service')
export class ServiceController {
    constructor(private serviceServices:ServiceService){

    }

    @Post()
    add( @Body() serviceModel:ServiceModel ):any{
        return this.serviceServices.saveService(serviceModel);
    }

    @Get()
    getService():any{
        return this.serviceServices.findAll();
    }

    @Get(':id')
    getById( @Param() params ):any{
        return this.serviceServices.findOneService(params.id);
    }

    @Get('author/:author')
    getByAuthor( @Param() params ):any{
        return this.serviceServices.findByAuthor(params.author);
    }

    @Put(':id')
    updateService( @Body() serviceModel:ServiceModel, @Param() params ):any{
        return this.serviceServices.updateService(params.id, serviceModel);
    }

    @Delete(':id')
    deleteService( @Param() params ):any{
        return this.serviceServices.deleteService(params.id)
    }

}
