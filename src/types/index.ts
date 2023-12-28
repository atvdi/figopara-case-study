export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

export interface PokemonResponse {
  count: number;
  results: PokemonResult[];
}
