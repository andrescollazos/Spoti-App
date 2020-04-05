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

  TOKEN: string = "BQCjyuiBby4NJSLhQphYFelENBv-fFrGAZjZxXLaHTTonz4a_rKe7WYVIvAKAu3JNSf5mq4woYp7d9dHo9M";

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

  getArtista( termino: string ) {
    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
                .pipe(map(data => data['artists'].items))
  }
}
