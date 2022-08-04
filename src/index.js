import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startGetUser } from './Action/userAction';
import { startGetCustomerData } from './Action/customerAction';
import { startGetProduct } from './Action/productAction';
import { startGetBill } from './Action/billAction';

const store = configureStore()
console.log("state" , store.getState())

store.subscribe(() =>{
  console.log("updated" , store.getState())
})

if(localStorage.hasOwnProperty("token")){
  store.dispatch(startGetUser())
  store.dispatch(startGetCustomerData())
  store.dispatch(startGetProduct())
  store.dispatch(startGetBill())
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter><Provider store = {store}>
  <App/>
  </Provider>
  </BrowserRouter>
  
);




// https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#activities
// https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#referencing-external-resources

