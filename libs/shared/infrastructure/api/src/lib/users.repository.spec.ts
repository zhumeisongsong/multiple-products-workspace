import { describe, it, expect, vi } from 'vitest';
import { UsersRepositoryImpl } from './users.repository';
import { graphqlClient } from './graphql-client';

describe('UsersRepositoryImpl', () => {
  describe('findUserById', () => {
    it('should return user when query is successful', async () => {
      const mockUser = {
        id: '123',
        name: 'Test User',
        email: 'test@example.com',
        preferences: {
          selfCareTopics: ['EXERCISE', 'MEDITATION'],
        },
      };

      const mockClient = {
        query: vi.fn().mockResolvedValue({
          data: { user: mockUser },
          error: null,
        }),
      };

      const repository = new UsersRepositoryImpl(
        mockClient as unknown as typeof graphqlClient,
      );
      const result = await repository.findUserById('123');

      expect(result).toEqual(mockUser);
      expect(mockClient.query).toHaveBeenCalledTimes(1);
    });

    it('should throw error when query fails', async () => {
      const mockError = new Error('GraphQL Error');
      const mockClient = {
        query: vi.fn().mockResolvedValue({
          data: null,
          error: mockError,
        }),
      };

      const repository = new UsersRepositoryImpl(
        mockClient as unknown as typeof graphqlClient,
      );

      await expect(repository.findUserById('123')).rejects.toThrow(
        'GraphQL Error',
      );
      expect(mockClient.query).toHaveBeenCalledTimes(1);
    });
  });
});
