import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { TooltipModule } from "ngx-bootstrap/tooltip";


import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MenuComponent } from './Components/menu/menu.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { OurservicesComponent } from './Components/ourservices/ourservices.component';
import { ProductsComponent } from './Components/products/products.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductComponent } from './Components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CarouselComponent,
    AboutusComponent,
    OurservicesComponent,
    ProductsComponent,
    GalleryComponent,
    ContactComponent,
    NotFoundComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpClientModule,
    TooltipModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
