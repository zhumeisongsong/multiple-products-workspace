import { User } from './user.entity';

describe('User', () => {
  it('should create a User with the given id and name', () => {
    const user: User = {
      id: '1',
      userPreferences: {
        selfCareTopics: [],
      },
    };

    expect(user.id).toBe('1');
    expect(user.userPreferences.selfCareTopics).toEqual([]);
  });
});
