import { createSlice } from '@reduxjs/toolkit';

export const resumeTemplateModelSlice = createSlice({
  name: 'resumeTemplateModel',
  initialState: {
    resumeToolbarKeys: [],
    templateList: [],
    selectTemplate: {
      templateId: '',
      templateName: '',
      templateCover: '',
      templateIndex: -1,
    },
  },
  reducers: {
    changeTemplateModel: (state, action) => {
      // 注意dispatch的值有时不一样，数组中可能没有两个值。所以需要?.
      let modulePoint: string = action.payload[0].key;
      state[modulePoint] = action.payload[0].values;
      let modulePoint1: string = action.payload[1]?.key;
      state[modulePoint1] = action.payload[1]?.values;
    },
  },
});

export const { changeTemplateModel } = resumeTemplateModelSlice.actions;
export default resumeTemplateModelSlice.reducer;
