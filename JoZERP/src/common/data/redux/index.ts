import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import tablesReducer from '../GenericTableRedux/tablesSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    tables: tablesReducer, //  table is added 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;