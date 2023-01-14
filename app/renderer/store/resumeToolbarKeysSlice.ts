import { createSlice } from '@reduxjs/toolkit';

type ResumeState = TSResume.SliderItem['key'][];
let resumeToolbarKeys: ResumeState = [];
export const resumeToolbarKeysSlice: any = createSlice({
  name: 'resumeToolbarKeys',
  initialState: {
    resumeToolbarKeys,
  },
  reducers: {
    changeKeys: (
      state,
      action: {
        payload: ResumeState;
      }
    ) => {
      state.resumeToolbarKeys = action.payload;
    },
  },
});

export const { changeKeys } = resumeToolbarKeysSlice.actions;
export default resumeToolbarKeysSlice.reducer;
