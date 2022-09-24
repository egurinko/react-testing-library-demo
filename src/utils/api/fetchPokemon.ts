import fetcher from '@/utils/fetcher';

export const fetchPokemon = async (index: number): Promise<FullPokemon> =>
  await fetcher<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${index}`);

export type FullPokemons = FullPokemon[];

export interface FullPokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Detail[];
  game_indices: GameIndice[];
  height: number;
  id: number;
  is_default: boolean;
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Detail;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Ability {
  ability: Detail;
  is_hidden: boolean;
  slot: number;
}

interface Detail {
  name: string;
  url: string;
}

interface GameIndice {
  game_index: number;
  version: Detail;
}

interface HeldItem {
  item: Detail;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: Detail;
}

interface Move {
  move: Detail;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: 0;
  move_learn_method: Detail;
  version_group: Detail;
}

interface Sprites {
  back_default: Sprite;
  back_female: Sprite;
  back_shiny: Sprite;
  back_shiny_female: Sprite;
  front_default: Sprite;
  front_female: Sprite;
  front_shiny: Sprite;
  front_shiny_female: Sprite;
}

type Sprite = string | null;

interface Stat {
  base_stat: number;
  effort: number;
  stat: Detail;
}

interface Type {
  slot: number;
  type: Detail;
}
