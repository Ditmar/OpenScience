import {render, screen, fireEvent } from '@testing-library/react';
import Facebook from '../../../../assets/icons/facebook.svg?raw';
import Google from '../../../../assets/icons/google.svg?raw';
import Button from './Button';
describe('Testing Button React Component', () => {
    test('should be rendere Google', () => {
        render(<Button icon={Google}>Google</Button>);
        const buttonElement = screen.getByText(/Google/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('should be rendere Facebook', () => {
        render(<Button icon={Facebook}>Facebook</Button>);
        const buttonElement = screen.getByText(/Facebook/i);
        expect(buttonElement).toBeInTheDocument();
    })
});