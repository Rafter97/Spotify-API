import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  accessToken = '';
  //clientId = '1a35a32a3614461eb98bcfc86e8f813c';
  constructor(private http:HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQAZQbVLRUZHMpCnn2VR6DBfMPr-ODYd9119RMjHzM9D4KCo8g3YFjtzzZ0D9PWmC6dWYOcBrbJIjF27zq8`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases?limit=50").pipe(
      map(data => data["albums"].items)
    );
  }
}
