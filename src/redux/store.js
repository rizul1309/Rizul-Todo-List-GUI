import {createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { todosReducer } from './reducers/todoReducer'
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todosReducer,
    currentTab: tabReducer
})


const middleware = [thunk]; 

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store;