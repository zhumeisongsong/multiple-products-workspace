import { UserPreferences } from './user-preferences.entity';

export interface User {
  id: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userPreferences: UserPreferences;
}
