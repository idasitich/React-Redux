import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore }from 'redux'
import { Provider } from 'react-redux';


//inisialisasi state
const globalState ={
  totalOrder : 0
}

//Reducer untuk merubah value dari store 
const rootReducer = (state=globalState, action)=>{
  if(action.type==='PLUS_ORDER'){
    return{
      ...state,
      totalOrder : state.totalOrder + 1
    }
  }
  if(action.type==='MINUS_ORDER'){
    let totalOrder = 0;
    if(state.totalOrder>0){
      totalOrder= state.totalOrder -1
    }
    return{
      ...state,
      totalOrder: totalOrder
    }
  }
  return state;
}


//store
const storeRedux = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={storeRedux}>
    <App />
    </Provider>
);

