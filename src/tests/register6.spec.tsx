import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterPage } from '../pages/RegisterPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
  it('should handle valid username input', () => {
    render(
      <MemoryRouter>
          <RegisterPage />
      </MemoryRouter>
    );
    const usernameInput = screen.getByTestId('inputEmail');
    fireEvent.change(usernameInput, { target: { value: 'Leandro@.com' } }); //. logo depois do @
    expect(screen.getByTestId('aviso'));
  });

});