import { useSnapshot } from 'valtio';

import { usersActions, usersStates } from './users-states';

// hooks
export function useUsers() {
  const snapshot = useSnapshot(usersStates);

  return {
    me: snapshot.me,
    ...usersActions,
  };
}
