import { SelfCareTopic } from '@self-care-topics/domain';
import { Button } from '@shared/ui';
import { FC, useEffect } from 'react';

interface Props {
  allTopics: SelfCareTopic[];
  userTopics: SelfCareTopic[];
  initialUserSelfCareTopics: () => Promise<void>;
  toggleSelfCareTopic: (selfCareTopic: SelfCareTopic) => Promise<void>;
}

export const SelfCareTopicsToggleGroup: FC<Props> = ({
  allTopics,
  userTopics,
  initialUserSelfCareTopics,
  toggleSelfCareTopic,
}) => {
  useEffect(() => {
    initialUserSelfCareTopics();
  }, []);

  const handleToggleSelfCareTopic = async (topic: SelfCareTopic) => {
    await toggleSelfCareTopic(topic);
  };

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Self-care topics"
    >
      {allTopics.map((topic) => (
        <Button
          key={topic.id}
          aria-pressed={userTopics.some((t) => t.id === topic.id)}
          variant={
            userTopics.some((t) => t.id === topic.id) ? 'default' : 'outline'
          }
          onClick={() => {
            handleToggleSelfCareTopic(topic);
          }}
        >
          {topic.name}
        </Button>
      ))}
    </div>
  );
};
