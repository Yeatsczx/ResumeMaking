import { configureStore } from '@reduxjs/toolkit'
import resumeToolbarKeysReducer from './resumeToolbarKeysSlice'

export default configureStore({
    reducer: {
        resumeToolbarKeys: resumeToolbarKeysReducer,
    },
})