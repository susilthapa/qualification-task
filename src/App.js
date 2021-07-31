import React from 'react'
import { Provider } from 'react-redux'

import './assets/css/App.css'
import store from './redux/store'
import UserList from './components/UserList'

function App() {
  return (
    <Provider store={store}>
      <UserList/>
    </Provider>
  );
}

export default App;
