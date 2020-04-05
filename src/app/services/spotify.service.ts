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

  TOKEN: string = "BQA9rFwKcWWy9sefuwiWiLHLGUKrk4L46y4JSgwdwb5cxR7YnWZlDmV4mZ6HfKtTnt8Z6Wn6rF7Xb3bfUvk";

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
