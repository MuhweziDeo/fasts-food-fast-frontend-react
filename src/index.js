import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './Routes/index'
import store from './store';
import '../node_modules/argon-design-system-free/assets/css/argon.css';
import 'react-toastify/dist/ReactToastify.css';
import faker from 'faker';
localStorage.setItem('img','https://image.flaticon.com/icons/svg/145/145849.svg')

ReactDOM.render(
<Provider store={store}>
<Routes />
</Provider>, document.getElementById('root'))
