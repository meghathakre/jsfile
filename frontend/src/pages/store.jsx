import { configureStore } from "@reduxjs/toolkit";
import  cardReducer from "../pages/cardSlice";
const store=configureStore({
    reducer:{
        mycard:cardReducer
    }
})
export default store;