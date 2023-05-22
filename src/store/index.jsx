import { configureStore } from "@reduxjs/toolkit";
import stateReducer from './storeSlice'

const store = configureStore({
    reducer: {
        app: stateReducer,
    }
})

export default store;