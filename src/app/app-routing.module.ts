//Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ArtistComponent } from './artist/artist.component'
import { AlbumsComponent } from './albums/albums.component'

export const routes: Routes = [
  { path: 'artist/:id', component: ArtistComponent },
  { path: 'albums/:id', component: AlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }