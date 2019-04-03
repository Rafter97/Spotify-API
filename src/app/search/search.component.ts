import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  albums: any[] = [];

  constructor(private _Spotify: SpotifyService) { }

  searchArtists(searchTerm: string) {
    this._Spotify.getArtist(searchTerm)
      .subscribe((data: any) => {
        this.artists = data;
        console.log(this.artists);
        console.log(searchTerm);
      });
      this.searchAlbumn(searchTerm);
  }

  searchAlbumn(searchTerm: string) {
    this._Spotify.getAlbumn(searchTerm)
    .subscribe((data:any) =>{
      this.albums = data;
      console.log(this.albums);
    });
  }


  ngOnInit() {

  }

}
