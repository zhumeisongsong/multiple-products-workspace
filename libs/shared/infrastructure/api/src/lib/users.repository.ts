import { User } from '@users/domain';
import { gql } from 'urql';

import { graphqlClient } from './graphql-client';

const UserDocument = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      name
      email
      preferences {
        selfCareTopics
      }
    }
  }
`;

export class UsersRepositoryImpl {
  constructor(private readonly client: typeof graphqlClient) {}

  async findUserById(id: string): Promise<User | null> {
    const result = await this.client.query(UserDocument, { id });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return result.data?.user;
  }
}
