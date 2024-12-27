import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  describe('getUserSelfCareCategories', () => {
    it('should return an array of self care topics', async () => {
      const result = await service.getUserSelfCareCategories();
      expect(Array.isArray(result)).toBeTruthy();
    });
  });

  describe('toggleUserSelfCareTopic', () => {
    it('should toggle user self care topic successfully', async () => {
      const topicId = '123';
      const result = await service.toggleUserSelfCareTopic(topicId);
      expect(result).toBe('success');
    });
  });
});
