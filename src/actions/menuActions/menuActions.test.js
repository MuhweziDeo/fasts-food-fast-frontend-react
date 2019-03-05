import { getMenuActions } from './menuActions';
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

    it('should dispatch GET ORDERS FAIL ', () => {
        const store = mockStore({})
        fetchMock.get(`${BASE_URL}/menu`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {'errors':"" }
        })
        const expectedAction = [{
            type: types.GET_MENU_FAIL,
            payload: {errors:""}
        }]
        return store.dispatch(getMenuActions()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

    it('should dispatch GET ORDERS SUCCESS ', () => {
        const store = mockStore({})
        fetchMock.get(`${BASE_URL}/menu`, {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {'menu':[{}] }
        })
        const expectedAction = [{
            type: types.GET_MENU_SUCCESS,
            payload: [{}]
        }]
        return store.dispatch(getMenuActions()).then(()=>{
            expect(store.getActions()).toEqual(expectedAction)
        })
    });

   
})

