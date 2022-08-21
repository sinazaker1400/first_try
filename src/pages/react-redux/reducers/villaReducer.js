const villaReducer = (state={
    villaName:"",
    villaStyle:"",
    inputValue:"",
    villaSpaces:[],
    villaKeeper:""
},action) => {
    switch (action.type) {
    case "SET_NAME":
        state = {
            ...state,
            villaName: action.payload 
        };
        break;

        case "SET_STYLE_FULFILLED":
        state = {
            ...state,
            villaStyle: action.payload 
        };
        break;

        case "SET_INPUT":
        state = {
            ...state,
            inputValue: action.payload 
        };
        break;

        case "SET_SPACE":
        state = {
            ...state,
            villaSpaces: [...state.villaSpaces, action.payload]
        };
        break;

        case "SET_KEEPER":
            if(state.villaName)
        {state = {
            ...state,
            villaKeeper: action.payload 
        };} else {alert("set the villa name first")}
        break;

    };
    return state;
    };

export default villaReducer;