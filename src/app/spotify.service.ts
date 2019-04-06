import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQBfn9ceGb7lWiILbPOovrcsoYfn89opgMtbb6x09cZNA4NpVWtpEMoA-VAmwqz6l3H_DQuDV1LdSmu898o`
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
    return this.getQuery(`artists/${id}/top-tracks?country=SE`).pipe(
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
