import React from 'react'
import { render } from 'react-dom'
import App from './App'
//Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Services/Reducers/index'
const store = createStore(rootReducer)
//



render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)