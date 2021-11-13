import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './barchart/barchart.component';
import { HttpClientModule } from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';
import { SwiperModule } from "swiper/angular";
import { SmallCardComponent } from './small-card/small-card.component';
import { LargeCardComponent } from './large-card/large-card.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,

    BarchartComponent,
     SmallCardComponent,
     LargeCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    SwiperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
