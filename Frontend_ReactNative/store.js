import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers/reducerCombiner';

/* start the storing process
to save the data from the api*/

const store = createStore( rootReducer,applyMiddleware(thunk));

export default store;