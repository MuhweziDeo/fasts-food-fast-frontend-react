import {getUserOrdersAction}  from './userOrderActions';
import fetchMock from "fetch-mock";
import BASE_URL from "../../constants";
import types from "../types";
import  thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('aync actions for orders',() => {
    beforeEach(() => {
        fetchMock.restore()
    })

    it('should dispatch GET_ORDERS_SUCCESS ', () => {
        const store = mockStore({})
        fetchMock.get(`${BASE_URL}/users/orders`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {'user_orders': [{}]}
        })
        const expectedAction = [{
            type: types.GET_ORDERS_SUCCESS,
            payload: [{}]
        }]
        return store.dispatch(getUserOrdersAction()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

    it('should dispatch GET_ORDERS_FAIL', () => {
        const store = mockStore({})
        fetchMock.get(`${BASE_URL}/users/orders`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {}
        })
        const expectedAction = [{
            type: types.GET_ORDERS_FAIL,
            payload:undefined
        }]
        return store.dispatch(getUserOrdersAction()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

    it('should dispatch NO ORDERS FOUND', () => {
        const store = mockStore({})
        fetchMock.get(`${BASE_URL}/users/orders`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {"message":"You havent placed any orders yet"}
        })
        const expectedAction = [{
            type: types.NO_ORDERS_FOR_USER,
            payload:"You havent placed any orders yet"
        }]
        return store.dispatch(getUserOrdersAction()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });
})

