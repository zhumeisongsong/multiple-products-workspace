import { SelfCareTopic } from '@self-care-topics/domain';
import { describe, it, expect } from 'vitest';

import { UsersRepository } from './users.repository';

describe('UsersRepository', () => {
  const mockTopics: SelfCareTopic[] = [
    { id: '1', name: 'Topic 1' },
    { id: '2', name: 'Topic 2' },
  ];

  let repository: UsersRepository;

  it('should define the interface methods', () => {
    repository = {} as UsersRepository;
    const methods = ['findUserById', 'createUser', 'updateUserSelfCareTopics'];
    const repositoryKeys = Object.keys(repository);

    methods.forEach((method) => {
      expect(repositoryKeys).toContain(method);
    });
  });

  it('should have correct method signatures', () => {
    expect(repository?.findUserById('1')).toBeInstanceOf(Promise);
    expect(repository?.createUser()).toBeInstanceOf(Promise);
    expect(repository?.updateUserSelfCareTopics(mockTopics)).toBeInstanceOf(
      Promise,
    );
  });
});
