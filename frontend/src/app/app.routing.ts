import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes Imports
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';

const appRoutes: Routes = [
    {
        path : '',
        component : HomeComponent
    },
    {
        path : 'product/:id',
        component : ProductComponent
    },
    {
        path: '**',
        component : NotFoundComponent
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);