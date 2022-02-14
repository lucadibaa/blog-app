import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import reducers from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
        // typeof window !== 'undefined' ? (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f) : null
    )
)

export default store
