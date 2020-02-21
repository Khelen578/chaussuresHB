import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, retry } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[];
  apiUrl = "http://localhost:3000/chaussure";
  pokemonAPI = "http://93.29.84.137:3500/pokemon";


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.pokemonAPI + '/' + name).pipe(
      catchError(this.handlError)
    );
  }



  handlError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
