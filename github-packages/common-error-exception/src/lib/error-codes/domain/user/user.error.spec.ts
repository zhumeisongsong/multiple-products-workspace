import { userError, userAttributeError } from './user.error';

describe('userError', () => {
  it('should have NOT_FOUND error', () => {
    expect(userError.NOT_FOUND).toEqual({
      errorCode: 'E_USER_RESOURCE_NOT_FOUND',
      httpStatus: 404
    });
  });
});

describe('userAttributeError', () => {
  describe('EMAIL', () => {
    it('should have REQUIRED error', () => {
      expect(userAttributeError.EMAIL.REQUIRED).toEqual({
        errorCode: 'E_USER_EMAIL_REQUIRED',
        httpStatus: 400
      });
    });

    it('should have INVALID_FORMAT error', () => {
      expect(userAttributeError.EMAIL.INVALID_FORMAT).toEqual({
        errorCode: 'E_USER_EMAIL_INVALID_FORMAT',
        httpStatus: 400
      });
    });
  });

  describe('PASSWORD', () => {
    it('should have REQUIRED error', () => {
      expect(userAttributeError.PASSWORD.REQUIRED).toEqual({
        errorCode: 'E_USER_PASSWORD_REQUIRED',
        httpStatus: 400
      });
    });

    it('should have MIN_LENGTH_NOT_REACHED error', () => {
      expect(userAttributeError.PASSWORD.MIN_LENGTH_NOT_REACHED).toEqual({
        errorCode: 'E_USER_PASSWORD_MIN_LENGTH_NOT_REACHED',
        httpStatus: 400
      });
    });
  });
});
