import { types } from "../types/types";

const initialState = {
    characters: []
};

export const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CHARACTER:
            return {
                ...state,
                characters: action.payload.character
            };
        default:
            return state;
    }
};