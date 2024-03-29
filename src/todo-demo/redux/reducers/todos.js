import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../action.type";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            state.allIds.splice(state.allIds.findIndex(v => v === id), 1)
            delete state.byIds[id];
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
