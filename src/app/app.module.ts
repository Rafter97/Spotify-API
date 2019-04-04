import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './homePage/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';
import { ArtistComponent } from './artist/artist.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    TracksComponent,
    ArtistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
