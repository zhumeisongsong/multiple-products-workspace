import { UserPreferences } from '../user-preferences.entity';

describe('UserPreferences', () => {
  it('should create a UserPreferences with the given id and name', () => {
    const userPreferences: UserPreferences = {
      selfCareTopics: [
        {
          id: '1',
          name: 'Test Topic',
        },
      ],
    };

    expect(userPreferences.selfCareTopics).toEqual([
      {
        id: '1',
        name: 'Test Topic',
      },
    ]);
  });
});
