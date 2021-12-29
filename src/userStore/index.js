import { createStore } from "redux";

const initialState ={id:0, username: " ", password: " ", email: " ", name: " ", alias: " ", dob: " ", gender: " "}

const counterModify = (state = initialState, action) => {
    if (action.type === "change") {
        console.log(action.payload)
        return { ...state, ...action.payload };
        
    }
    return state;
}

const store = createStore(counterModify);
export default store;