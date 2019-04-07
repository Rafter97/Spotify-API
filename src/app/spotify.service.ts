import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Search } from 'src/app/search'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    console.log("url", url)
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQBfCEoKfcK4C9LMD2JwgKDGuvCzkvclDYlfqZawR-VX69rljNX2cEHz2MBVhRW-rZ9OKZYT0D7K2gOthGU`
      //key reset every hour --- I used postman to get it
    });
  
    return this.http.get(url, { headers });
  }

  searchCollection: AngularFirestoreCollection<Search>;
  searches: Observable<Search[]>;

  AddSearchesToFirebaseDatabase(searchTerm: string){
    this.searchCollection= this.afs.collection("searched");
    this.afs.collection('searched').add({ 
      'searchTerm': searchTerm  
    });
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
  getArtist_Track(id: string): Observable<any[]> {
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=IE`;
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQBfCEoKfcK4C9LMD2JwgKDGuvCzkvclDYlfqZawR-VX69rljNX2cEHz2MBVhRW-rZ9OKZYT0D7K2gOthGU`
    });
   return this.http.get<any[]>(url , {headers});
    // return url.pipe(
    //   map(data => data["tracks"].items)
    // );
  }
  //Getting the Tracks in an Album      
  getAlbum_Track(id: string): Observable<any[]> {
    const url = `https://api.spotify.com/v1/albums/${id}/tracks?limit=10`;
    const headers = new HttpHeaders({
      Authorization:
        `Bearer BQBfCEoKfcK4C9LMD2JwgKDGuvCzkvclDYlfqZawR-VX69rljNX2cEHz2MBVhRW-rZ9OKZYT0D7K2gOthGU`
    });
   return this.http.get<any[]>(url , {headers});

  //  return this.getQuery(`albums/${id}/tracks`).pipe(
    //  map(data => data["tracks"].items));
  }
}
