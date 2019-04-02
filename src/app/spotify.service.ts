import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  //  clientId = '1a35a32a3614461eb98bcfc86e8f813c';
  //  clientSecertId = 'c11faf191210476887ed694d9fa72182';

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQB-HhBhSp-MTJuDE0E2t9GyLLYzafkbabYgOFi3klVGyde66eE2mAtyORMuQy29RXUVh9d_Vk5EFQwCwuo`
      //key reset every hour --- I used postman to get it
    });
    return this.http.get(url, { headers });
  }

  NewReleases() {
    return this.getQuery("browse/new-releases?limit=50").pipe(
      map(data => data["albums"].items)
    );
  }

  //used by the serach Component
  getArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=50`).pipe(
      map(data => data["artists"].items)
    );
  }







  //Method is being Accessed in the Artists.Component.ts
  Artists(id: string) {
    return this.getQuery(`artists/${id}`);
  }
}
