import * as React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import Index from '../../../components/home/Index';

let documentBody: RenderResult;

describe('<Index />', () => {
  beforeEach(() => {
    documentBody = render(<Index />);
  });

  it('shows initial messages', () => {
    const welcome = documentBody.getByText('Welcome to Pokemon world!');
    const firstTitle = documentBody.getByText('My Pokemon');
    const firstShortDesc = documentBody.getByText('There are 3 functions.');
    const secondTitle = documentBody.getByText('The name of Pokémon');
    const secondShortDesc = documentBody.getByText(
      'is the portmanteau of the Japanese brand Pocket Monsters. The term "Pokémon", in addition to referring to the Pokémon franchise itself,',
    );
    const readMores = documentBody.getAllByText('Read more...');

    expect(welcome).toBeInTheDocument();
    expect(firstTitle).toBeInTheDocument();
    expect(firstShortDesc).toBeInTheDocument();
    expect(secondTitle).toBeInTheDocument();
    expect(secondShortDesc).toBeInTheDocument();
    expect(readMores.length).toEqual(2);
  });

  it('shows full texts', async () => {
    const readMores = documentBody.getAllByText('Read more...');

    const firstDesc = 'You can check pokemons in Pokedex page';
    expect(documentBody.queryByText(firstDesc, { exact: false })).not.toBeInTheDocument();

    // ACT and ASSERT
    fireEvent.click(readMores[0]);
    expect(documentBody.queryByText(firstDesc, { exact: false })).toBeInTheDocument();

    const secondDesc = 'also collectively refers to the 896 fictional';
    expect(documentBody.queryByText(secondDesc, { exact: false })).not.toBeInTheDocument();

    // ACT and ASSERT
    fireEvent.click(readMores[1]);
    expect(documentBody.queryByText(secondDesc, { exact: false })).toBeInTheDocument();
  });
});
