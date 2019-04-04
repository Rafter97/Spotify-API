import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];

  constructor(private spotify: SpotifyService) { }


  getArtist(id: string) {
    this.spotify.getArtist(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
      });
  }

  getTopTracks(id: string) {
    this.spotify.getArtist_Track(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });

  }

  ngOnInit() {
  }

}
