import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './index';


export default function configureStore(state){
    return createStore(rootReducers, applyMiddleware(thunk));
}