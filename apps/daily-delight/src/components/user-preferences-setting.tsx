import { useSelfCareTopics } from '@self-care-topics/interface-adapter';
import { SelfCareTopicsToggleGroup } from './self-care-topics-toggle-group';
import { useUsers } from '@users/interface-adapter';

export const UserPreferencesSetting = () => {
  const { selfCareTopics } = useSelfCareTopics();
  const { userPreferences, toggleSelfCareTopic } = useUsers();

  return (
    <section>
      <SelfCareTopicsToggleGroup
        allTopics={[...selfCareTopics]}
        userTopics={[...userPreferences.selfCareTopics]}
        toggleSelfCareTopic={toggleSelfCareTopic}
      />
    </section>
  );
};
