import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETE_TODO } from "./action.type";

// 给新增的任务一个随机的id
const generateId = () => (Math.floor(Math.random() * 9000) + 1000);

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: generateId(),
        content
    }
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    payload: { id }
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: { id }
});
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
