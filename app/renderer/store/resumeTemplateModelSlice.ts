import { createSlice } from '@reduxjs/toolkit';

export interface TStore {
  /**
   * @description 选中工具条模块的keys
   */
  resumeToolbarKeys: string[];
  /**
   * @description 模块列表
   */
  templateList: TSTemplate.Item[];
  /**
   * @description 当前选中的模版
   */
  selectTemplate: TSTemplate.Item;
}

let initialState: TStore = {
  resumeToolbarKeys: [],
  templateList: [],
  selectTemplate: {
    templateId: '',
    templateName: '',
    templateCover: '',
  },
};

export const resumeTemplateModelSlice: any = createSlice({
  name: 'resumeTemplateModel',
  initialState,
  reducers: {
    changeTemplateModel: (state, action: { payload: { key: keyof TStore; values: any }[] }) => {
      // 注意dispatch的值有时不一样，数组中可能没有两个值。所以需要?.
      let modulePoint = action.payload[0].key;
      state[modulePoint] = action.payload[0].values;
      let modulePoint1 = action.payload[1]?.key;
      state[modulePoint1] = action.payload[1]?.values;
    },
  },
});

export const { changeTemplateModel } = resumeTemplateModelSlice.actions;
export default resumeTemplateModelSlice.reducer;
