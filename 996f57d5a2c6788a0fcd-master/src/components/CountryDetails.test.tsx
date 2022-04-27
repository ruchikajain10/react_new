import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryDetails from './CountryDetails';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { MemoryRouter } from 'react-router-dom';

describe('countryDetails', () => {
    test('renders App component', () => {
        render(
        <MemoryRouter>
            <CountryDetails />
        </MemoryRouter>
        );
        const linkElement = screen.getAllByText(/Capital/i);
        expect(linkElement).toHaveLength(2);
    });
})

