import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  errorMessage: string;
  AlbumTracks: any[] = [];
  //@Input() items: any[] = [];

  constructor(private _spotify: SpotifyService) {

    this._spotify.NewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
      }, (error) => {
        this.errorMessage = error.error.error.message;
      });
    console.log(this.newSongs);
  }

  getAlbumTracks(id: string) {
    console.log(id)
    this._spotify.getAlbum_Track(id)
      .subscribe((data: any) => {
        this.AlbumTracks = data.items;
        console.log(this.AlbumTracks)
      });
  }

  ngOnInit() {

  }

}
