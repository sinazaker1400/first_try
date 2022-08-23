const villaReducer = (
  state = {
    villaName: "",
    villaStyle: "",
    inputValue: "",
    villaSpaces: [],
    villaKeeper: "",
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        inputValue: "",
        villaName: action.payload,
      };
      break;

    case "SET_STYLE_FULFILLED":
      if(state.inputValue)
      {state = {
        ...state,
        inputValue: "",
        villaStyle: action.payload,
      };}else{alert("set the style of your villa first")}
      break;

    case "SET_INPUT":
      state = {
        ...state,
        inputValue: action.payload,
      };
      break;

    case "SET_SPACE":
      if(state.inputValue && state.villaName)
      {state = {
        ...state,
        inputValue: "",
        villaSpaces: [...state.villaSpaces, action.payload],
      };} else if(state.villaName){alert("set a space for your villa")}
      else{alert("set the name of your villa first")}
      break;

    case "SET_KEEPER":
      if (state.villaName && state.inputValue) {
        state = {
          ...state,
          inputValue: "",
          villaKeeper: action.payload,
        };
      } else if (state.inputValue) {
        alert("set the villa name first B)");
      } else {
        alert("set the villa keeper name");
      }
      break;
  }
  return state;
};

export default villaReducer;
