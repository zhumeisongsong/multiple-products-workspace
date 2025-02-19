import { sharedInfrastructureApi } from './shared-infrastructure-api';

describe('sharedInfrastructureApi', () => {
  it('should work', () => {
    expect(sharedInfrastructureApi()).toEqual('shared-infrastructure-api');
  });
});
