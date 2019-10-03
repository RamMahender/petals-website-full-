import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import dashboard from './components/dashboard/dashboard';
// import login from './components/login/login';
import * as serviceWorker from './serviceWorker';
// import Foodmenu from './components/foodmenu/foodmenu';
// import AdminStudentprofile from './components/admin-studentprofile/admin-studentprofile';
// import Studentprofile from './components/studentprofile/studentprofile';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
