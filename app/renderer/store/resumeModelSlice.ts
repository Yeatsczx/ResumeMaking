import { createSlice } from '@reduxjs/toolkit';

type initialState = Partial<TSResume.IntactResume>;
let initialState: initialState = {};
export const resumeToolbarKeysSlice: any = createSlice({
  name: 'resumeModel',
  initialState,
  reducers: {
    changeInitialModel: (
      state,
      action: {
        payload: {
          values: any;
        };
      }
    ) => {
      console.log(123123);
      // eslint-disable-next-line guard-for-in
      for (let i in action.payload.values) {
        state[i] = action.payload.values[i];
      }
      // state = { ...action.payload.values };
    },
    changeModel: (
      state,
      action: {
        payload: {
          key: keyof TSResume.IntactResume;
          values: any;
        };
      }
    ) => {
      let modulePoint = action.payload.key;
      state[modulePoint] = action.payload.values;
    },
    changeModelList: (
      state,
      action: {
        payload: {
          key: keyof TSResume.IntactResume;
          values: any;
        }[];
      }
    ) => {
      let modulePoint = action.payload[0].key;
      state[modulePoint] = action.payload[0].values;
      let modulePointList = action.payload[1].key;
      state[modulePointList] = action.payload[1].values;
    },
  },
});

export const { changeModel, changeModelList, changeInitialModel } = resumeToolbarKeysSlice.actions;

export default resumeToolbarKeysSlice.reducer;
