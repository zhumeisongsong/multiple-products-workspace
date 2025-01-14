import { useSelfCareTopics } from '@self-care-topics/interface-adapter';
import { useUserTasks } from '@user-tasks/interface-adapter';
import { useUsers } from '@users/interface-adapter';
import { useEffect, useState } from 'react';

import { TaskCalendar } from './task-calendar';

export const CurrentMonthTaskList = () => {
  const { selfCareTopics } = useSelfCareTopics();
  const { userId, userPreferences, toggleSelfCareTopic } = useUsers();
  const { currentMonthUserTasks, getCurrentMonthUserTasks } = useUserTasks();
  const [date] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });

  useEffect(() => {
    if (userId) {
      getCurrentMonthUserTasks(userId, {
        ...userPreferences,
        selfCareTopics: [...selfCareTopics],
      });
    }
  }, [userId, getCurrentMonthUserTasks]);

  return (
    <section>
      <TaskCalendar
        data={currentMonthUserTasks.map(({ id, name, description }) => ({
          id,
          name,
          description,
        }))}
        date={date}
      />
    </section>
  );
};
