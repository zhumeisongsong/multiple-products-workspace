import { describe, it, expect, vi } from 'vitest';
import { usersActions, usersStates } from './users-states';
import { saveUserSelfCareTopicsUseCase } from '@users/application';

vi.mock('@users/application', () => ({
  saveUserSelfCareTopicsUseCase: vi.fn(),
}));

describe('usersActions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    usersStates.me = null;
  });

  describe('saveUserSelfCareTopics', () => {
    it('should save user self care topics and update loading state', async () => {
      const topics = [
        { id: '1', name: 'Topic 1' },
        { id: '2', name: 'Topic 2' },
      ];
      const mockSaveTopics = vi.mocked(saveUserSelfCareTopicsUseCase);
      mockSaveTopics.mockResolvedValue();

      await usersActions.toggleSelfCareTopic(topics[0]);

      expect(mockSaveTopics).toHaveBeenCalledWith(
        topics[0],
        expect.any(Object),
      );
    });

    it('should handle errors during save', async () => {
      const topics = [{ id: '1', name: 'Topic 1' }];
      const mockError = new Error('Save failed');
      const mockSaveTopics = vi.mocked(saveUserSelfCareTopicsUseCase);
      mockSaveTopics.mockRejectedValue(mockError);

      await expect(usersActions.toggleSelfCareTopic(topics[0])).rejects.toThrow(
        mockError,
      );
    });
  });
});
