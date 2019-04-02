import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  newSongs: any[] = [];
  errorMessage: string;
  @Input() items: any[] = [];

  constructor(private _spotify: SpotifyService) {

    this._spotify.NewReleases()
      .subscribe((data: any) => {
        this.newSongs = data;
      }, (error) => {
        this.errorMessage = error.error.error.message;
      });
      console.log(this.newSongs);
  }

  ngOnInit() {
  }

}
