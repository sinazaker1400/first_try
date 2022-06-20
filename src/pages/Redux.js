import { createStore } from 'redux';
import Button from "./Button";
import React, { useState } from "react";

const reducer = (state = {
  name: 'sina',
  money: 0,
  wives: [],
  work: '',
  age: 0,
}, action) => {
  switch (action.type) {
    case 'INCOME':
      if(state.work==='architecture'){
      state = {
        ...state,
        money: state.money + 1,
        age: state.age + 1
      }} else if (state.work==='developer'){
        state = {
          ...state,
          money: state.money + 15,
          age: state.age + 1
        }};
      break;
      case 'MARRY':
        if(state.money>0)
      state = {
        ...state,
        wives: [...state.wives, action.newWife],
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

const store = createStore(reducer);




const Wives = () => {
  const [state, setState] = useState(store.getState());

  return (
    <div className="App clearFix">
      
      <p>hi</p>
      <p>you are {state.name}</p>
      <p>you are {state.age} years old</p>
      <p>your work is {state.work}</p>
      <p>you have {state.money} money</p>
      <p>you have {state.wives.length} wives</p>
      <p>your wives are {state.wives.map(wife => wife + " ")}</p>
      <Button 
      text="add a wife" 
      eventHandler={() => {
        store.dispatch({
        type: 'MARRY',
        newWife: 'marry'
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
      
    </div>
  )
}





export default Wives;