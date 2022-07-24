export function setName(name) {
    return {
        type: "SET_NAME",
        payload: name
    };
};

export function setStyle(style) {
    return {
        type: "SET_STYLE",
        payload: style
    };
};

export function setInput(value) {
    return {
        type: "SET_INPUT",
        payload: value
    };
};

export function setSpace(space) {
    return {
        type: "SET_SPACE",
        payload: space
    };
};

export function setKeeper(keeper) {
    return {
        type: "SET_KEEPER",
        payload: keeper
    };
};

