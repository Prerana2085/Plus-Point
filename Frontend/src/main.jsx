import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.js'
// import "antd/dist/reset.css";
import App from '../App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import store from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </Provider>
)
