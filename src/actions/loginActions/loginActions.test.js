import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import types from '../types';
import BASE_URL from  '../../constants'
import loginAction from './loginActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('aync actions for login',() => {
    beforeEach(()=>{
        fetchMock.restore()
    })
    it('should dispatch REGISTER SUCCESS',() => {
        fetchMock.postOnce(`${BASE_URL}/auth/login`,{
            headers:{
                'Content-Type':'application/json'
            },
            body:{"token":"atoken", "username":"dee" }
        })
        const expectedAction=[{
            type:types.LOGIN_SUCCESS,
            payload:{
                token:"atoken",
                username:"dee"
            }
        }]
        const store=mockStore({})
        return store.dispatch(loginAction({
            username:"dee",
            password:'passwd',
        })).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

    it('should dispatch REGISTER FAILS',() => {
        fetchMock.postOnce(`${BASE_URL}/auth/login`,{
            headers:{
                'Content-Type':'application/json'
            },
            body:{ 'message':'password verification failed'},

        })
        const expectedAction=[{
            type:types.LOGIN_FAILS,
            payload: "password verification failed"

        }]
        const store=mockStore({});
        return store.dispatch(loginAction({
            username:"dee",
            password:'passwd',
        })).then(()=>{
            expect(store.getActions()).toEqual(expectedAction);
        })
    });



})
