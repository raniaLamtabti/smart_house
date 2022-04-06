import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FloresComponent } from './views/flores/flores.component';
import { RoomsComponent } from './views/rooms/rooms.component';
import { RoomViewComponent } from './views/room-view/room-view.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'flores', component: FloresComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room', component: RoomViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
