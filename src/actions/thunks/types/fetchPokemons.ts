export type Pokemons = Pokemon[];

export type Pokemon = {
  id: number;
  name: string;
  stats: Stat[];
  sprites: Sprites;
};

export type FullPokemons = FullPokemon[];

export type FullPokemon = {
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
};

type Ability = {
  ability: Detail;
  is_hidden: boolean;
  slot: number;
};

type Detail = {
  name: string;
  url: string;
};

type GameIndice = {
  game_index: number;
  version: Detail;
};

type HeldItem = {
  item: Detail;
  version_details: VersionDetail[];
};

type VersionDetail = {
  rarity: number;
  version: Detail;
};

type Move = {
  move: Detail;
  version_group_details: VersionGroupDetail[];
};

type VersionGroupDetail = {
  level_learned_at: 0;
  move_learn_method: Detail;
  version_group: Detail;
};

type Sprites = {
  back_default: Sprite;
  back_female: Sprite;
  back_shiny: Sprite;
  back_shiny_female: Sprite;
  front_default: Sprite;
  front_female: Sprite;
  front_shiny: Sprite;
  front_shiny_female: Sprite;
};

type Sprite = string | null;

type Stat = {
  base_stat: number;
  effort: number;
  stat: Detail;
};

type Type = {
  slot: number;
  type: Detail;
};
