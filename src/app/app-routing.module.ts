//Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ArtistComponent } from './artist/artist.component'
import { AlbumsComponent } from './albums/albums.component'
import { HomeComponent } from './homePage/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: '**', component: HomeComponent }
];

