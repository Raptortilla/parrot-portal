import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import commonReducer, { TCommonState } from './reducers/commonSlice';

const persistConfig = {
  key: 'root',
  version: 2,
  storage: storage,
  blacklist: ['common'], // Slices to exclude from persist
};

export interface IRootState {
  common: TCommonState;
}

const rootReducer = combineReducers({
  common: commonReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
