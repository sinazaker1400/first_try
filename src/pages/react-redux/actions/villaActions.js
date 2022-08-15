export function setName(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }, 10313);
    }
};

export function setStyle(style) {
    return {
        type: "SET_STYLE",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(style);
            },313);
        })
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

