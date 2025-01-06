import { ThemeProvider } from '@shared/ui';
import { InfrastructureContainer } from '@shared/infrastructure-di';
import { UsersServiceFactory } from '@users/application';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import { globalsStyles } from '@shared/ui';

UsersServiceFactory.initialize(InfrastructureContainer.getUsersRepository());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
