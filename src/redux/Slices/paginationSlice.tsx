import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentQuestionIndex: 0,
    questionCount: 4   
}

export const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.currentQuestionIndex = action.payload
        },
    }
})

export const { changePage } = paginationSlice.actions

export default paginationSlice.reducer