import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import types from '../types';
import BASE_URL from  '../../constants'
import signupAction from './signUpActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('aync actions for signup',() => {
    beforeEach(()=>{
        fetchMock.restore()
    })
    it('should dispatch REGISTER SUCCESS',() => {
        fetchMock.postOnce(`${BASE_URL}/auth/signup`,{
            headers:{
                'Content-Type':'application/json'
            },
            body:{'response':{'message':'user created'},"token":"atoken", "username":"dee" }
        })
        const expectedAction=[{
            type:types.REGISTER_SUCCESS,
            payload:"user created"
        }]
        const store=mockStore({})
        return store.dispatch(signupAction({
            username:"dee",
            password:'passwd',
            confirm:'passwd'
        })).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

    it('should dispatch REGISTER FAILS',() => {
        fetchMock.postOnce(`${BASE_URL}/auth/signup`,{
            headers:{
                'Content-Type':'application/json'
            },
            body:{ 'message':'username dee already taken'},

        })
        const expectedAction=[{
            type:types.REGISTER_FAILS,
            payload:{
                message:"username dee already taken"
            }
        }]
        const store=mockStore({});
        return store.dispatch(signupAction({
            username:"dee",
            password:'passwd',
            confirm:'passwd'
        })).then(()=>{
            expect(store.getActions()).toEqual(expectedAction);
        })
    });



})
