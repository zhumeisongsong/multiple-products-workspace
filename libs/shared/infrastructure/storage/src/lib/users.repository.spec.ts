import { SelfCareTopic } from '@self-care-topics/domain';
import { IUsersRepository } from './users.repository';
import { LocalStorageRepository } from './local-storage.repository';

describe('IUsersRepository', () => {
  let usersRepository: IUsersRepository;
  let localStorageRepository: LocalStorageRepository;

  beforeAll(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    };
  });

  beforeEach(() => {
    localStorageRepository = new LocalStorageRepository();
    usersRepository = new IUsersRepository(localStorageRepository);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('getUserSelfCareTopics', () => {
    it('should return empty array when no topics exist', async () => {
      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([]);
    });

    it('should return stored topics', async () => {
      const mockTopics: SelfCareTopic[] = [
        { id: '1', name: 'Exercise' },
        { id: '2', name: 'Meditation' },
      ];

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTopics),
      );

      localStorageRepository.set('user-self-care-topics', mockTopics);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual(mockTopics);
    });
  });

  describe('addUserSelfCareTopic', () => {
    it('should add topic to empty list', async () => {
      const topic: SelfCareTopic = { id: '1', name: 'Exercise' };

      vi.spyOn(localStorage, 'getItem')
        .mockReturnValueOnce(JSON.stringify([]))
        .mockReturnValueOnce(JSON.stringify([topic]));

      await usersRepository.addUserSelfCareTopic(topic);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([topic]);
    });

    it('should append topic to existing list', async () => {
      const existingTopic: SelfCareTopic = { id: '1', name: 'Exercise' };
      const newTopic: SelfCareTopic = { id: '2', name: 'Meditation' };

      // Mock initial state
      vi.spyOn(localStorage, 'getItem')
        .mockReturnValueOnce(JSON.stringify([existingTopic])) // First call returns existing topic
        .mockReturnValueOnce(JSON.stringify([existingTopic, newTopic])); // Second call returns both topics

      await usersRepository.addUserSelfCareTopic(newTopic);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([existingTopic, newTopic]);
    });
  });

  describe('deleteUserSelfCareTopic', () => {
    it('should remove topic from list', async () => {
      const topic1: SelfCareTopic = { id: '1', name: 'Exercise' };
      const topic2: SelfCareTopic = { id: '2', name: 'Meditation' };

      vi.spyOn(localStorage, 'getItem')
        .mockReturnValueOnce(JSON.stringify([topic1, topic2]))
        .mockReturnValueOnce(JSON.stringify([topic2]));

      await usersRepository.deleteUserSelfCareTopic(topic1);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([topic2]);
    });

    it('should handle deleting non-existent topic', async () => {
      const existingTopic: SelfCareTopic = { id: '1', name: 'Exercise' };
      const nonExistentTopic: SelfCareTopic = { id: '2', name: 'Meditation' };

      vi.spyOn(localStorage, 'getItem').mockReturnValue(
        JSON.stringify([existingTopic]),
      );

      await usersRepository.deleteUserSelfCareTopic(nonExistentTopic);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([existingTopic]);
    });
  });
});
