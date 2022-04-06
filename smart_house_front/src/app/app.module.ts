import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';


import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './views/home/home.component';

// Material UI
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';

import { DeviceComponent } from './components/device/device.component';
import { FloresComponent } from './views/flores/flores.component';
import { FloreComponent } from './components/flore/flore.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomComponent } from './components/room/room.component';
import { RoomViewComponent } from './views/room-view/room-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DeviceComponent,
    FloresComponent,
    FloreComponent,
    RoomsComponent,
    RoomComponent,
    RoomViewComponent
  ],
  imports: [
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
