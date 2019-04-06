import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  id: string;

  constructor(private spotify: SpotifyService,route:ActivatedRoute) { 
    route.params.subscribe( params => this.id = params.id)
  }

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
