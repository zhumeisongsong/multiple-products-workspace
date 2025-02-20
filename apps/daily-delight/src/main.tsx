import { ThemeProvider } from '@shared/ui';
import {
  LocalStorageInfrastructureContainer,
  APIInfrastructureContainer,
} from '@shared/infrastructure-di';
import { TasksServiceFactory } from '@tasks/application';
import { UsersServiceFactory } from '@users/application';
import { UserTasksServiceFactory } from '@user-tasks/application';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import './styles/globals.css';

UsersServiceFactory.initialize(APIInfrastructureContainer.getUsersRepository());
UserTasksServiceFactory.initialize(
  LocalStorageInfrastructureContainer.getUserTasksRepository(),
);
TasksServiceFactory.initialize(
  LocalStorageInfrastructureContainer.getTasksRepository(),
);

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
