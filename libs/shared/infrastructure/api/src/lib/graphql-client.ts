import { createClient, Client, cacheExchange, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { persistedExchange } from '@urql/exchange-persisted';

export const graphqlClient: Client = createClient({
  url:
    process.env['GRAPHQL_API_URL'] ??
    (() => {
      throw new Error('GRAPHQL_API_URL environment variable is required');
    })(),
  // fetchOptions: { headers },
  exchanges: [
    cacheExchange,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    authExchange(async (utils) => {
      // TODO: access token and refresh token logic future
      // let token = localStorage.getItem('token');
      // let refreshToken = localStorage.getItem('refreshToken');

      return {
        addAuthToOperation(operation) {
          // if (!token) return operation;
          // return utils.appendHeaders(operation, {
          //   Authorization: `Bearer ${token}`,
          // });
        },
        didAuthError: () => {
          // if we have auth error handling logic, we can put it here
          return false;
        },
        refreshAuth: async () => {
          // if we have refresh token logic, we can put it here
        },
      };
    }),
    persistedExchange({
      preferGetForPersistedQueries: true,
    }),
    fetchExchange,
  ],
});
