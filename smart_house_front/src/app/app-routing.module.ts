import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FloresComponent } from './views/flores/flores.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomComponent } from './views/room/room.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flores', component: FloresComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room', component: RoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
