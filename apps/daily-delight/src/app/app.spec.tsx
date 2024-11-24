import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
});
