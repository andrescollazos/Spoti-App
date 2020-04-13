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

  TOKEN: string = "BQAINXmBKzGEayLk3PMHX200Hu_y_xUicQn-zl1FWssMYU-Y2EHqsZI4jLNlHCzs8NC0AckNNrvdNwV1Vxc";
  
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