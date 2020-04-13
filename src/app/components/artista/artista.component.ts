import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ],
})
export class ArtistaComponent {

  artista: any = {};
  loading: boolean;
  topTracks: any;

  constructor(private router: ActivatedRoute,
              private _spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    })
  }

  getArtista( id: string ) {
    this._spotifyService.getArtista( id )
                        .subscribe( artista => {
                          this.artista = artista;
                          this.loading = false;
                        })
  }

  getTopTracks ( id: string ) {
    this._spotifyService.getTopTracks( id )
                        .subscribe( topTracks => {
                          this.topTracks = topTracks;
                          console.log(this.topTracks);
                        })
  }

}
