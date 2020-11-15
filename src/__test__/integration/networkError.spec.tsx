import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import NetworkError from '../../components/NetworkError';
import provideTheme from '../utils/provideTheme';

let documentBody: RenderResult;

describe('<NetworkError />', () => {
  beforeEach(() => {
    documentBody = render(provideTheme(<NetworkError />));
  });

  it('shows messages and picachu', () => {
    expect(documentBody.getByText('Pica!!')).toBeInTheDocument();
    expect(documentBody.getByAltText('picachu')).toBeInTheDocument();
    expect(documentBody.getByText('Maybe internet connection is not good.')).toBeInTheDocument();
  });

  it('has rgb(255, 187, 50) color title', () => {
    const title = documentBody.getByText('Pica!!');
    const style = window.getComputedStyle(title);

    expect(style.color).toEqual('rgb(255, 187, 50)');
  });
});
