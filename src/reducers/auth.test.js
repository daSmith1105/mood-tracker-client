import reducer from './auth';
import { SET_AUTH_TOKEN, CLEAR_AUTH, AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth';

// const initialState = {
//     authToken: null, 
//     currentUser: null,
//     loading: false,
//     error: null
// };

    describe('auth reducer', () => {
        it('should return the initial state', () => {
            expect(reducer(undefined, {})).toEqual(
            {
                authToken: null, 
                currentUser: null,
                loading: false,
                error: null
            }
            )
        })
        it('should set the auth token', () => {
            expect(
            reducer({}, {
                type: SET_AUTH_TOKEN,
                authToken: '1234'
            })
            ).toEqual(
            {
                authToken: '1234',
            }
            )
        })
        it('should clear the token and current user', () => {
            expect(
            reducer({}, {
                type: CLEAR_AUTH,
                authToken: null,
                currentUser: null
            })
            ).toEqual(
            {
                authToken: null,
                currentUser: null
            }
            )
        })
        it('should set loading on request auth', () => {
            expect(
            reducer({}, {
                type: AUTH_REQUEST,
                loading: true,
                error: null
            })
            ).toEqual(
            {
                loading: true,
                error: null
            }
            )
        })
        it('should set loading false and current user on success', () => {
            expect(
            reducer({}, {
                type: AUTH_SUCCESS,
                loading: false,
                currentUser: 'user'
            })
            ).toEqual(
            {
                loading: false,
                currentUser: 'user'
            }
            )
        })
        it('should set error on fail', () => {
            expect(
            reducer({}, {
                type: AUTH_ERROR,
                loading: false,
                error: 'fail'
            })
            ).toEqual(
            {
                loading: false,
                error: 'fail'
            }
        )
     })
})