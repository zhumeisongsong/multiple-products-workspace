import { useSnapshot } from 'valtio';

import { usersActions, usersStates } from './users-states';
import { SelfCareTopic } from '@self-care-topics/domain';

export const useUsers = () => {
  const snapshot = useSnapshot(usersStates);

  return {
    me: snapshot.me,
    ...usersActions,
  };
};
