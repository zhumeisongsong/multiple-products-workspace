import { SelfCareTopic } from './self-care-topic.entity';

describe('SelfCareTopic', () => {
  it('should create a SelfCareTopicEntity with the given id and name', () => {
    const topic: SelfCareTopic = {
      id: '1',
      name: 'Meditation',
    };

    expect(topic.id).toBe('1');
    expect(topic.name).toBe('Meditation');
  });
});
