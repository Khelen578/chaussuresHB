import { Type } from './type';

export class Pokemon {
	abilities: string;
	forms: string;
	game_indices: string;
	height: number;
	held_items: string;
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: string;
	name: string;
	order: number;
	species: {
		name: string;
		url: string;
	};
	sprites: {
		back_default: string,
		back_female: null,
		back_shiny: string,
		back_shiny_female: null
		front_default: string,
		front_female: string,
		front_shiny: string,
		front_shiny_female: string
	};
	stats: string;
	types: Type[];
	weight: number;
}
