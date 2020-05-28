import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service listo');
  }

  TOKEN: string = "BQCmtu05sC92Mo_DWNqSfWIAgFDoJeX0Yi4LmcD3TiE14JAPPVy3N6Ckpezt_1KakssGmJXSUQU5JM9Ied8"
  
  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TOKEN}`
    });
    return this.http.get( url, { headers } );
  }


  getNewRelease() {
    return this.getQuery( 'browse/new-releases' )
                .pipe( map( data => data['albums'].items ))
  }

  getArtistas( termino: string ) {
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
                .pipe(map(data => data['artists'].items))
}

  getArtista( id: string ) {
    return this.getQuery( `artists/${ id }`);
  }
  
  getTopTracks( id: string ) {
    return this.getQuery( `artists/${ id }/top-tracks?country=us`)
                .pipe(map(data => data['tracks']));
  }
}