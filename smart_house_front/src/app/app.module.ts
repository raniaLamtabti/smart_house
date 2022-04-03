import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';

// Material UI
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DeviceComponent } from './components/device/device.component';
import { FloresComponent } from './views/flores/flores.component';
import { FloreComponent } from './components/flore/flore.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomComponent } from './components/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DeviceComponent,
    FloresComponent,
    FloreComponent,
    RoomsComponent,
    RoomComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
