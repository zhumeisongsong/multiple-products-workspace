import { useSnapshot } from 'valtio';

import { usersActions, usersStates } from './users-states';

export const useUsers = () => {
  const snapshot = useSnapshot(usersStates);

  return {
    me: snapshot.me,
    ...usersActions,
  };
};
