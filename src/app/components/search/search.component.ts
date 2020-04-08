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
  loading: boolean;

  ngOnInit(): void {
  }

  buscarArtista(termino: string) {
    this.loading = true;
    this._spotifyService.getArtistas( termino )
      .subscribe( ( data: any ) => {
        this.artistas = data;
        this.loading = false;
      })
  }

}
