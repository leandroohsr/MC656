import { render, screen, fireEvent } from '@testing-library/react';
import { RegisterPage } from '../pages/RegisterPage';
import { MemoryRouter } from 'react-router-dom';

describe('LoginPage', () => {
  it('should check passwords match input', () => {
    render(
      <MemoryRouter>
          <RegisterPage />
      </MemoryRouter>
    );

    const senhaInput = screen.getByTestId('inputSenha');
    const senhaInput2 = screen.getByTestId('inputSenha2');

    fireEvent.change(senhaInput, { target: { value: 'senhaSecreta1!' } }); //Correto
    fireEvent.change(senhaInput2, { target: { value: 'senhaSecreta1!' } }); //Correto


    var form;

    try {
        form = screen.getByTestId('avisoMatch')
    }
    catch {
        form = null;
    }
    finally {
        expect(form).toBeNull();
    }

    
  });

});