import {
    SET_AUTH_TOKEN,
    CLEAR_AUTH,
    AUTH_REQUEST,
    AUTH_SUCCESS,
    AUTH_ERROR,
} from './auth';

import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError,
} from './auth';

describe('setAuthToken', () => {
  it('should set the auth token', () => {
    const authToken = '123456789'
    const expectedAction = {
      type: SET_AUTH_TOKEN,
      authToken
    }
    expect(setAuthToken(authToken)).toEqual(expectedAction)
  })
})

describe('clearAuth', () => {
    it('should clear auth token and current user', () => {
      const currentUser = null
      const expectedAction = {
        type: CLEAR_AUTH,
      }
      expect(clearAuth(currentUser)).toEqual(expectedAction)
    })
  })

  describe('authRequest', () => {
    it('should fire auth request', () => {
      const expectedAction = {
        type: AUTH_REQUEST,
      }
      expect(authRequest()).toEqual(expectedAction)
    })
  })

  describe('authSuccess', () => {
    it('should set current user on success', () => {
      const expectedAction = {
        type: AUTH_SUCCESS,
      }
      expect(authSuccess()).toEqual(expectedAction)
    })
  })

  describe('authError', () => {
    it('should return error on auth fail', () => {
      const expectedAction = {
        type: AUTH_ERROR,
      }
      expect(authError()).toEqual(expectedAction)
    })
  })