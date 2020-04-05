import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ],
})
export class SearchComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService) { }

  artistas: any[];

  ngOnInit(): void {
  }

  buscarArtista(termino: string) {
    this._spotifyService.getArtista( termino )
      .subscribe( ( data: any ) => {
        this.artistas = data;
      })
  }

}
