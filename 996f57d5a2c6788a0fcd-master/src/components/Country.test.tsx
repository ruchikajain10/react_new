import React from 'react';
import { render, screen } from '@testing-library/react';
import Country from './Country';
import { MemoryRouter } from 'react-router-dom';

describe('country', () => {
    test('submit button is shown', ()=> {
        const { getByText } = render(
        <MemoryRouter>
            <Country />
        </MemoryRouter>
        );
        const button = getByText("Submit");
        expect(button).toBeTruthy()
    });
})