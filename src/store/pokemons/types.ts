export type PokemonsState = PokemonState[];

export interface PokemonState {
  id: number;
  name: string;
  stats: StatState[];
  sprite: SpriteState;
}

interface StatState {
  base_stat: number;
  effort: number;
  stat: DetailState;
}

interface DetailState {
  name: string;
  url: string;
}

type SpriteState = string | null;
