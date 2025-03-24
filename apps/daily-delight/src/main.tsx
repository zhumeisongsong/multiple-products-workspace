import { ThemeProvider } from '@shared/ui';
import {
  StorageContainer,
  ApiContainer,
} from '@shared/infrastructure-di';
import { TasksServiceFactory } from '@tasks/application';
import { UsersServiceFactory } from '@users/application';
import { UserTasksServiceFactory } from '@user-tasks/application';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

import './styles/globals.css';

UsersServiceFactory.initialize(ApiContainer.getUsersRepository());
UserTasksServiceFactory.initialize(
  StorageContainer.getUserTasksRepository(),
);
TasksServiceFactory.initialize(
  StorageContainer.getTasksRepository(),
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
