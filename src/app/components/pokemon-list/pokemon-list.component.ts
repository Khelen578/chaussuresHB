import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  searchResult: Array<Pokemon>;
  isLoading: boolean;
  pokemon: Pokemon;
  searchWord: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.searchResult = new Array<Pokemon>();
    this.searchWord = '';
  }

  onSubmit() {
    this.isLoading = true;
    return this.pokemonService.getPokemon(this.searchWord).subscribe((data: Pokemon) => {
      this.searchResult = [];
      this.searchResult.push(data);
      this.isLoading = false;
    });
  }

}
