import { createStore  , applyMiddleware, combineReducers} from 'redux';
import Button, {Input} from "./Button";
import React, { useState } from "react";


const wifeReducer = (state = {
  name: '',
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
      permanentWives: [...state.permanentWives, state.wives.pop()],
      
    };}
  
    break;
    case 'HABITATION':
      if(state.money>2)
      state = {
        ...state,
        homes: [...state.homes, action.payload],
        money: state.money -3
      }
      break;
      case 'BORN':
        if(state.permanentWives.length>0 && state.homes.length>0 && state.money>0 && state.children.length/state.permanentWives.length < 3)
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
        }} else {
          state = {
            ...state,
            money: state.money + state.work.length,
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

      case 'SET_NAME':
      state = {
        ...state,
        name: action.payload
      };
      break;
  }
  return state;
};

const lifeReducer = (state = {
skills: [],
religion: "",
kalif: "",
interests: [],
researchs:[],
}, action) => {
  switch(action.type) {
    case "ADD_SKILL":
      state = {
        ...state,
        skills: [...state.skills, action.payload]
      };
      break;

      case "SET_RELIGION":
      state = {
        ...state,
        religion: action.payload
      };
      break;

      case "CHOOSE_KALIF":
      state = {
        ...state,
        kalif: action.payload
      };
      break;

      case "HAVE_INTEREST":
      state = {
        ...state,
        interests: [...state.interests, action.payload]
      };
      break;

      case "DO_RESEARCH":
      state = {
        ...state,
        researchs: [...state.researchs, action.payload]
      };
      break;
  };
  return state;
};

const theLogger = (store) => (next) => (action) => {
console.log('logging by middleWare: the action is', action);
next(action);
};

const store = createStore(combineReducers({lifeReducer,wifeReducer}), applyMiddleware(theLogger));


const Wives = () => {
  const [state, setState] = useState(store.getState());
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App clearFix">
      <p>Hi, you are {state.wifeReducer.name}</p>
      <p>your religion is {state.lifeReducer.religion} & your kalif is {state.lifeReducer.kalif}</p>
      <p>your interests are {state.lifeReducer.interests.map(interest => interest + " ")} & your researchs are {state.lifeReducer.researchs.map(research => research + " ")} & your skills are {state.lifeReducer.skills.map(skill => skill+ " ")}</p>
      <p>you are {state.wifeReducer.age} years old & your work is {state.wifeReducer.work}</p>
      <p>you have {state.wifeReducer.money} money</p>
      <p>you have {state.wifeReducer.wives.length} temporary wives & your temporary wives are {state.wifeReducer.wives.map(wife => wife + " ")}</p>
      <p>you have {state.wifeReducer.permanentWives.length} permanent wives & your permanent wives are {state.wifeReducer.permanentWives.map(wife => wife + " ")}</p>
      <p>you have {state.wifeReducer.homes.length} homes & your homes are {state.wifeReducer.homes.map(home => home + " ")}</p>
      <p>you have {state.wifeReducer.children.length} children & your children are {state.wifeReducer.children.map(child => child+ " ")}</p>

<Input 
backgroundColor="lightblue"
id = "input-1"
name="input-1"
labelText="type something in the input field"
eventHandler={() => setInputValue(document.getElementById("input-1").value)}
value={inputValue}
/>
<br />

<Button 
      text="set your name" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_NAME',
        payload: inputValue || 'Sina'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>

      <Button 
      text="choose a religion" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_RELIGION',
        payload: inputValue || 'Islam'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
      <Button 
      text="choose a kalif" 
      eventHandler={() => {
        store.dispatch({
        type: 'CHOOSE_KALIF',
        payload: inputValue || 'al-Imam al-Mahdy'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
       <Button 
      text="research something" 
      eventHandler={() => {
        store.dispatch({
        type: 'DO_RESEARCH',
        payload: inputValue || 'art'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
      <Button 
      text="have an interest" 
      eventHandler={() => {
        store.dispatch({
        type: 'HAVE_INTEREST',
        payload: inputValue || 'gaming'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
      <Button 
      text="reach a skill" 
      eventHandler={() => {
        store.dispatch({
        type: 'ADD_SKILL',
        payload: inputValue || 'front-end developer'
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
<br />
      <Button 
      text="add a temporary wife" 
      eventHandler={() => {
        store.dispatch({
        type: 'MARRY',
        payload: inputValue || 'mary'+`${state.wifeReducer.wives.length + state.wifeReducer.permanentWives.length + 1}`
      });
    setState(store.getState());
    document.getElementById("input-1").value = "";
    setInputValue("");
      }}/>
      
      <Button
      text="become an architect" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_WORK',
        payload: inputValue || 'architecture'
      });
      setState(store.getState());
      document.getElementById("input-1").value = "";
      setInputValue("");
      }}/>
      <Button
      text="become a developer" 
      eventHandler={() => {
        store.dispatch({
        type: 'SET_WORK',
        payload: inputValue || 'developer'
      });
      setState(store.getState());
      document.getElementById("input-1").value = "";
      setInputValue("");
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
      <br />
      <Button
      text="have a home" 
      eventHandler={() => {
        store.dispatch({
        type: 'HABITATION', 
        payload: inputValue || "home" + `${state.wifeReducer.homes.length + 1}`
      });
      setState(store.getState());
      document.getElementById("input-1").value = "";
      setInputValue("");
      }}/>
      <Button 
      text="add a permanent wife" 
      eventHandler={() => {
        store.dispatch({
        type: 'PERMANENT_MARRY',
      });
    setState(store.getState())
      }}/>
      <Button
      text="have a child" 
      eventHandler={() => {
        store.dispatch({
        type: 'BORN',
        payload: inputValue || "child" + `${state.wifeReducer.children.length + 1}`
      });
      setState(store.getState());
      document.getElementById("input-1").value = "";
      setInputValue("");
      }}/>
      
     
      
    </div>
  )
}

store.subscribe(() => {
  console.log('logged by subscribe: ', store.getState());
})


export default Wives;