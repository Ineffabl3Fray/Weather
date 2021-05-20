import initialState from './redux/initialState';
import configureStore from './redux/configureStore'

const store = configureStore(initialState)
export default store;