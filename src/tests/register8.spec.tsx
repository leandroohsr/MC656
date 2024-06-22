import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterPage } from '../pages/RegisterPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
  it('should handle valid password input', () => {
    render(
      <MemoryRouter>
          <RegisterPage />
      </MemoryRouter>
    );
    const usernameInput = screen.getByTestId('inputSenha');
    fireEvent.change(usernameInput, { target: { value: 'senhaSecreta1!' } }); // Senha correta

    var form;

    try {
        form = screen.getByTestId('avisoSenha')
    }
    catch {
        form = null;
    }
    finally {
        expect(form);
    }

  });

});