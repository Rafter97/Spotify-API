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
        `Bearer BQC14xzLpB56oJJX0Njq8QH0tq7kuPgo2h23n-u3iBXOysyHWChQ0Lq5Codz8cZQiTKtNJdDOMKDGvjdCTU`
      //key reset every hour --- I used postman to get it
    });
    return this.http.get(url, { headers });
  }
  //Used in homepage
  NewReleases() {
    return this.getQuery("browse/new-releases?limit=50").pipe(
      map(data => data["albums"].items)
    );
  }

  //Used by the serach Component
  getArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=20`).pipe(
      map(data => data["artists"].items)
    );
  }
  getAlbumn(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=album`).pipe(
      map(data => data["albums"].items)
    );
  }

  //Getting the Top Tracks by an Artist
  getArtist_Track(id: string) {
    return this.getQuery(`artists/${id}/top-tracks`).pipe(
      map(data => data["tracks"].items)
    );
  }
  //Getting the Tracks in an Album
  getAlbum_Track(id: string) {
    return this.getQuery(`albums/${id}/tracks`).pipe(
      map(data => data["tracks"].items)
    );
  }
}
