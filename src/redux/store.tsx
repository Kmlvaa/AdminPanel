import { configureStore } from "@reduxjs/toolkit";
import  PaginationReducer  from "./Slices/PaginationSlice";

export const store = configureStore({
    reducer: {
        pagination: PaginationReducer
    },
})

export type AppStore = ReturnType<typeof configureStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']