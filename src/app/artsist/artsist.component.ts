import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artsist.component.html',
  styleUrls: ['./artsist.component.css']
})
export class ArtsistComponent implements OnInit {

  constructor(private spotify: SpotifyService) {

  }


  


  ngOnInit() {
  }

}
