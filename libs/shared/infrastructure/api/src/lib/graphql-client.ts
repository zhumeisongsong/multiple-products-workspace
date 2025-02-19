import { createClient, Client, cacheExchange, fetchExchange } from 'urql';
import { authExchange } from '@urql/exchange-auth';
import { persistedExchange } from '@urql/exchange-persisted';

export const graphqlClient: Client = createClient({
  url: process.env['GRAPHQL_API_URL'] || '', // When run an app,  if you want to use mock server or localhost server. please new dev.mock or dev.local files and add variable value there.
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
