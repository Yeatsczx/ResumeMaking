import { configureStore } from '@reduxjs/toolkit';
import resumeToolbarKeysReducer from './resumeToolbarKeysSlice';
import resumeModelReducer from './resumeModelSlice';
import resumeTemplateModelReducer from './resumeTemplateModelSlice';

export default configureStore({
  reducer: {
    resumeToolbarKeys: resumeToolbarKeysReducer,
    resumeModel: resumeModelReducer,
    resumeTemplateModel: resumeTemplateModelReducer,
  },
});
