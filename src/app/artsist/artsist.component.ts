import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artsist.component.html',
  styleUrls: ['./artsist.component.css']
})
export class ArtsistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];

  constructor(private spotify: SpotifyService) {

  }

  getArtist(id: string) {
    this.spotify.Artists(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
      });
  }


  ngOnInit() {
  }

}
