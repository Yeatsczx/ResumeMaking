import { createSlice } from '@reduxjs/toolkit'

export const resumeToolbarKeysSlice = createSlice({
    name: 'resumeToolbarKeys',
    initialState: {
        resumeToolbarKeys: [],
    },
    reducers: {
        changeKeys: (state, action) => {
            state.resumeToolbarKeys = action.payload;
        },
    }
}
)

export const { changeKeys } = resumeToolbarKeysSlice.actions

export default resumeToolbarKeysSlice.reducer