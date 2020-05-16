import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes Imports
import { HomeComponent } from './Components/home/home.component';

const appRoutes: Routes = [
    {
        path : '',
        component : HomeComponent,
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);