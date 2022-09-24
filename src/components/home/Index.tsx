import React, { useState, useCallback } from 'react';
import '@/stylesheets/home/index.css';

const descriptions = [
  {
    title: 'My Pokemon',
    shortened: 'There are 3 functions.',
    full: 'You can check pokemons in Pokedex page. If you like one of them, go the detail page and add to My Pokemons. My Pokemons could be seen in My Pokemons page.'
  },
  {
    title: 'The name of Pokémon',
    shortened:
      'is the portmanteau of the Japanese brand Pocket Monsters. The term "Pokémon", in addition to referring to the Pokémon franchise itself,',
    full: 'also collectively refers to the 896 fictional species that have made appearances in Pokémon media as of the release of the eighth generation titles Pokémon Sword and Shield. "Pokémon" is identical in the singular and plural, as is each individual species name; it is grammatically correct to say "one Pokémon" and "many Pokémon", as well as "one Pikachu" and "many Pikachu".'
  }
];

const Index: React.FC<NoProps> = () => {
  const [showFullDescriptions, setShowFullDescriptions] = useState(
    [...descriptions].map(() => false)
  );

  const handleReadMore = useCallback(
    (index: number): void => {
      const nextShowFullDescriptions = showFullDescriptions.map(
        (prevValue, prevIndex) => (prevIndex === index ? true : prevValue)
      );
      setShowFullDescriptions(nextShowFullDescriptions);
    },
    [showFullDescriptions, setShowFullDescriptions]
  );

  return (
    <div>
      <h1 className="home">Welcome to Pokemon world!</h1>
      {descriptions.map((description, index) => (
        <div className="home_description" key={description.title}>
          <h2 className="home__description__title">{description.title}</h2>
          <h4>
            {description.shortened}
            {showFullDescriptions[index] ? (
              <span>{description.full}</span>
            ) : (
              <button
                type="button"
                onClick={() => handleReadMore(index)}
                className="button"
              >
                Read more...
              </button>
            )}
          </h4>
        </div>
      ))}
    </div>
  );
};

export const Home = React.memo(Index);
