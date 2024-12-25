import { SelfCareTopic } from '@self-care-topics/domain';
import { ToggleGroup, ToggleGroupItem } from '@shared/ui';
import { FC } from 'react';

interface Props {
  topics: SelfCareTopic[];
}

export const SelfCareTopicsToggleGroup: FC<Props> = ({ topics }) => {
  return (
    <ToggleGroup type="single">
      {topics.map((topic) => (
        <ToggleGroupItem value={topic.id}>{topic.name}</ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
