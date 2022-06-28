import { createStore  , applyMiddleware} from 'redux';
import Button from "./Button";
import React, { useState } from "react";

const wifeReducer = (state = {
  name: 'sina',
  money: 0,
  wives: [],
  work: '',
  age: 0,
  homes: [],
  permanentWives: [],
  children: []
}, action) => {
  switch (action.type) {
    case 'PERMANENT_MARRY':
      if(state.permanentWives.length<4 && state.money>1 && state.homes.length>state.permanentWives.length && state.wives.length>0)
    {state = {
      ...state,
      money: state.money -2,
      permanentWives: [...state.permanentWives, action.payload],
      wives: [...state.wives].slice(0,state.wives.length - 1)
    };}
  
    break;
    case 'HABITATION':
      state = {
        ...state,
        homes: [...state.homes, action.payload],
        money: state.money -3
      }
      break;
      case 'BORN':
        if(state.permanentWives.length>0 && state.homes.length>0 && state.money>0)
      state = {
        ...state,
        children: [...state.children, action.payload],
        money: state.money -1,
        age: state.age + 0.75
      };
      break;

    case 'INCOME':
      if(state.work==='architecture'){
      state = {
        ...state,
        money: state.money + action.payload,
        age: state.age + 1
      }} else if (state.work==='developer'){
        state = {
          ...state,
          money: state.money + 15*action.payload,
          age: state.age + 1
        }};
      break;
      case 'MARRY':
        if(state.money>0)
      state = {
        ...state,
        wives: [...state.wives, action.payload],
        money: state.money - 1
      };

      break;
      case 'SET_WORK':
      state = {
        ...state,
        work: action.payload
      };
      break;
  }
  return state;
};

const theLogger = (store) => (next) => (action) => {
console.log('the action is', action);
next(action);
};

const store = createStore(wifeReducer, applyMiddleware(theLogger));


const Wives = () => {
  const [state, setState] = useState(store.getState());

  return (
    <div className="App clearFix">

      <p>hi</p>
      <p>you are {state.name}</p>
      <p>you are {state.age} years old</p>
      <p>your work is {state.work}</p>
      <p>you have {state.money} money</p>
      <p>you have {state.wives.length} temporary wives</p>
      <p>your temporary wives are {state.wives.map(wife => wife + " ")}</p>
      <p>you have {state.permanentWives.length} permanent wives</p>
      <p>your permanent wives are {state.permanentWives.map(wife => wife + " ")}</p>
      <p>you have {state.homes.length} homes</p>
      <p>your homes are {state.homes.map(home => home + " ")}</p>
      <p>you have {state.children.length} children</p>
      <p>your children are {state.children.map(child => child+ " ")}</p>


      <Button 
      text="add a temporary wife" 
      eventHandler={() => {
        store.dispatch({
        type: 'MARRY',
        payload: 'mary'
      });
    setState(store.getState())
      }}/>
      <Button 
      text="add a permanent wife" 
      eventHandler={() => {
        store.dispatch({
        type: 'PERMANENT_MARRY',
        payload: 'mary'
      });
    setState(store.getState())
      }}/>
      <Button
      text="become an architect" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_WORK',
        payload: 'architecture'
      });
      setState(store.getState())
      }}/>
      <Button
      text="become a developer" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_WORK',
        payload: 'developer'
      });
      setState(store.getState())
      }}/>
      <Button
      text="have an income" 
      eventHandler={() => {
        store.dispatch({
        type: 'INCOME',
        payload: 1
      });
      setState(store.getState())
      }}/>
      <Button
      text="have a home" 
      eventHandler={() => {
        store.dispatch({
        type: 'HABITATION', 
        payload: "home" + `${state.homes.length + 1}`
      });
      setState(store.getState())
      }}/>
      <Button
      text="have a child" 
      eventHandler={() => {
        store.dispatch({
        type: 'BORN',
        payload: "child" + `${state.children.length + 1}`
      });
      setState(store.getState())
      }}/>
      
      
    </div>
  )
}
export default Wives;